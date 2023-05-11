import React from "react";
import { legacy_createStore } from "redux";
// import CounterContainer from "./container/CounterContainer";
// import TodosContainer from "./container/TodosContainer";

function ReduxExercise() {
  console.log("Hello ?");

  // 리덕스에서 관리할 상태
  const initialState = {
    counter: 0,
    text: "",
    list: [],
  };

  // 액션타입 : 액션타입은 주로 대문자로 작성한다.
  const INCREASE = "INCREASE";
  const DECREASE = "DECREASE";
  const CHANGE_TEXT = "CHANGE_TEXT";
  const ADD_TO_LIST = "ADD_TO_LIST";

  // 액션 생성함수 : 생성함수는 카멜케이스로 작성한다.
  function increase() {
    return {
      type: INCREASE, // 액션 객체는 type값이 필수이다.
    };
  }

  // 화살표 함수로 작성하는 것이 가독성이 좋기에 사용한다.
  const decrease = () => ({
    type: DECREASE,
  });

  const changeText = (text) => ({
    type: CHANGE_TEXT,
    text, // 액션 안에는 type외에도 추가적인 필드 작성 가능하다.
  });

  const addToList = (list) => ({
    type: ADD_TO_LIST,
    list,
  });

  /* 리듀서 만들기 */
  // 위 액션 생성함수들을 통해 만들어진 객체들을 참조해 새로운 상태를 만드는 함수를 만들어보자.
  // !!주의!! 리듀서는 불변성을 꼭 지켜줘야한다.
  function reducer(state = initialState, action) {
    switch (action.type) {
      case INCREASE:
        return {
          ...state,
          counter: state.counter + 1,
        };

      case DECREASE:
        return {
          ...state,
          counter: state.counter - 1,
        };

      case CHANGE_TEXT:
        return {
          ...state,
          text: state.text,
        };

      case ADD_TO_LIST:
        return {
          ...state,
          list: state.list.concat(action.item),
        };

      default:
        return state;
    }
  }

  /* 스토어 만들기 */
  const store = legacy_createStore(reducer);

  console.log(store.getState());

  const listener = () => {
    const state = store.getState();
    console.log(state);
  };

  const unsubscribe = store.subscribe(listener);

  store.dispatch(increase());
  store.dispatch(decrease());
  store.dispatch(changeText("안녕 ?"));
  store.dispatch(addToList({ id: 1, text: "와우" }));

  return (
    <>
      {/* <CounterContainer />
      <TodosContainer /> */}
    </>
  );
}
export default ReduxExercise;

// import { combineReducers } from "redux";
// import counter from "./counter";
// import todos from "./todos";

// const rootReducer = combineReducers({
//   counter,
//   todos,
// });

// export default rootReducer;
