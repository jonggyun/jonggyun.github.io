---
layout: post
title: mongoDB 및 mongoose 명령어 정리
summary: 나중에 찾아보기 위한 mongoDB 명령어 정리
featured-img: emile-perron-190221
---

# mongoDB 및 mongoose 명령어 정리

프로젝트 진행하면서 기록하는 mongoDB, mongoose 명령어

## mongoDB

> insert

- db.(collection 이름).save({})

  - db.usertable.save({ name:'test', age:'10', location:'seoul'})

- db.(collection 이름).insert()

  - db.usertable.insert({ name:'test', age:'10', location:'seoul'})

> select

- db.(collection 이름).find() or db.(collection 이름).find({})

  - db.usertable.find()

    - 전체를 select

- db.(collection 이름).find({ key:value })

  - db.usertable.find({ name: 'test'})

    - name이 test인 내용을 출력


## mongoose

공통사항인거 같은데 .exec()를 꼭 붙여줘야 해당 쿼리를 실행하는듯.

> insert

- Schema.save()

  - 스키마를 DB에 저장!!

  - Folder.save().exec() : 스미카 안에 담겨있는 내용을 save !


> select

- Schema.find().....

  - 미리 생성해둔 스키마를 통해서 조회를 진행. 

  - Folder.find().exec() : 폴더 리스트를 전부 조회.

  - .sort( {name: 1} ) : 정렬 기능 1(ASC), -1(DESC) 인듯?