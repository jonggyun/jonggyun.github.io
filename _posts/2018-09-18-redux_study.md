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



### Redux 정리 2.

* Provider 컴포넌트를 최상위에 추가.(react-redux 패키지의 일부)

* store 속성으로 스토어를 전달 <Provider store={store}>

* reducer는 액션이 스토어에 전달될 때마다 실행되는 함수. reducer는 state와 action을 전달 받음.

  * state는 전체 상태에서 해당 리듀서가 관리하는 일부분에 대한 참조.

  * action은 스토어로 전달된 액션을 표현.

  * reducer의 실행 결과는 새로운 state이다.

* reducer를 작성할 때는 redux-actions의 handleActions를 이용하자

  * key는 액션, value는 함수인 맵 같은 형태의 객체를 받는다. 액션 종류에 따른 함수가 선택된다.

* store의 데이터를 변경할 때는 액션을 사용한다. store.dispatch(), connect() 메서드를 통해 실행.

* store를 변경하려면 모든 reducer에 액션을 전달. reducer가 액션의 type에 따라 애플리케이션의 상태를 변경.

* store에 연결괸 컴포넌트(컨테이너 컴포넌트)는 스토어의 어느 데이터에도 접근할 수 있다. connect()함수를 사용.

* store의 데이터를 변경하려면 액션을 전달해야 한다. 

  * dispatch() 메서드는 액션을 인자로 받아 스토어에 전달하는 함수

  * this.props.dispath()를 이용하면 액션을 스토어에 전달할 수 있다.


### react, redux, axios 를 이용한 비동기 방식 

* [redux-thunk-axios Rep.](https://github.com/jonggyun/study_react/tree/master/redux-thunk-axios)

* 헷갈리는 내용은 꼭 다시 보고 주석 달아두기!