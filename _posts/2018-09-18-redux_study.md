---
layout: post
title: 리덕스(Redux) 공부 내용
summary: 리액트를 하면서 정리하는 리덕스 사용법
featured-img: emile-perron-190221
---

## React에서 Redux 사용하기

* 액션타입을 만들고

* 액션생성함수를 만들고

* 리듀서를 만들고(state=initialState, action)

* 리듀서를 스토어에 넣는다.

* 멍청한 컴포넌트를 똑똑한 컴포넌트에 import하고 똑똑한 컴포넌트에서 connect함수를 통해 mapStateToProps와 mapDispatchToProps를 넣으면 준비 끝!

* mapDispatchToProps는 dispatch함수를 통해 리듀서를 찾아간다.

* 리듀서에 들어있는 액션타입을 dispatch할 때 찾아간다!

* createAction을 사용하면 액션생성함수를 편하게 만들 수 있다.

* 리듀서에서 switch 대신 handleActions를 사용하면 간편해진다.

* connect함수에서 dispatch를 할 때 bindActionCreators를 사용하면 작업을 편하게 할 수 있다.

* bindActionCreators에는 (reducer, dispatch)가 파라미터로 들어간다.

* Ducks구조에서 export로 지정된 값에 붙을 수 있다.
