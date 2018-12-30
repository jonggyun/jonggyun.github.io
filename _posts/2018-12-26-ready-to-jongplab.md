---
layout: post
title: 블로그 만들기 준비 중
summary: 기획 및 개발 관련 기록하기
featured-img: emile-perron-190221
---

# jongp-LAB(가제)

## 2018-12-26

- 스펙 정하기

  - Back-end : node.js, express, ~~mariaDB, sequalizer~~, mongoDB, mongoose

  - Front-end : es6, react, sass, css-module

- 타 블로그 분석..

  존재하는 기능들 파악하기

  기능리스트 작성 in trello

  나 혼자 작성하는 블로그 이기 때문에 어드민 페이지에서 로그인 하는 방식을 선택

  유저는 한 명!! 그게 바로 나!

  어드민 페이지 / 사용자 페이지 분리

  어드민 페이지에서 포스트 작성, 관리, 카테고리 관리 등을 진행

  방문자는 비회원상태에서 댓글을 작성할 수 있게 하기

- DB 설계

  일단 총 5개 테이블

  유저, 포스팅, 카테고리, 해시태그, 댓글

  ERD 작성 in AQuery tool

  ERD 1차 - 타입에 대한 상세한 설정은 하지 않고 테이블 컬럼만 지정해두었다

## 2018-12-27

- ERD 2차 수정을 진행하다 문득 포스팅 내용에 대한 저장을 고민하다가 mariaDB의 BLOB 등으로는 한계가 있을거 같다는 생각이 들었다. 이러나 저러나 한계가 정해진 사이즈에 데이터를 저장하는 것이기 때문이다.

  그러다가 포스팅 내용을 첨부파일로 저장한 후 링크를 거는 방식으로 가는 것도 나쁘지 않다고 생각이 들던 도중 예전에 공부하면서 배운 mongoDB에서 string으로 데이터를 저장하면 이 문제가 바로 해결 될것 같았다.

- mariaDB에서 mongoDB로... 바꾸는 방법도 생각해봐야겠다.

  결국 mongoDB를 사용하기로 결정, schema는 trello에 올려두었음

  mongoDB로 바꾸니 해시태그 같은 경우는 별도의 테이블을 생성하지 않고 진행할 수 있을거 같았음

- REST API 설계

  관리자 페이지에서 대부분의 기능들이 진행된다. 사용자단은 대부분이 GET으로 출력하는 방식으로 진행될 듯 (댓글기능 빼고)

  내일 다시 한 번 api 명세서를 확인해보고 서버 셋팅을 시작할까 생각 중이다.

## 2018-12-28 ~ 2018.12-30

- 연말 약속으로 인해 작업이 늦어졌다.

- 결국 mongoDB를 이용하기로 결정.

- REST API 정의는 trello의 checklist 기능을 이용해서 만들었다. 총 25개의 기능이 나왔다.

- back-end 작업을 진행하고 있다

  - mongoose의 query에 익숙해져야한다. 생각보다 편리한 기능이 많았다.

    - populate의 경우 편한건지.. 불편한건지.. 모르겠다. 다른 schema를 연결 시켜주는 것은 좋은데 populate 내부에 조건을 걸어서 검색하는건 없는 듯?

  - 유저 비밀번호 경우 bcrpyt를 이용해서 암호화

  - django에서 rest_framework의 status 기능이 괜찮았어서 node에서도 비슷한 라이브러리가 있나 찾아봤는데 있어서 사용 중이다.

    - yarn add http-status

    - 아쉬운점은 django의 status는 status.HTTP_200_OK의 형식인데 http-status는 status.OK의 형식이라 상태코드와 메시지를 동시에 볼 수 없다는 것?

    - 나중에 할수 있으면 위의 형식의 오픈소스를 만들어 봐야겠다.
