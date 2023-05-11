import React, { useReducer } from "react";

function UseReducer() {
  const INITAL_STATE = { name: "Eille", age: 0 };
  // 컨텍스트API사용하기.
  const ProfileDispatch = React.createContext(null);

  function Reducer(state, action) {
    switch (action.type) {
      case "setName":
        return { ...state, name: action.name };
      case "setAge":
        return { ...state, age: action.age };
      default:
        return state;
    }
  }

  function Profile() {
    const [state, dispatch] = useReducer(Reducer, INITAL_STATE);

    // INPUT VALUE 자식 컴포넌트
    function SomeComponent() {
      return (
        <>
          <p>{`name is ${state.name}`}</p>
          <p>{`age is ${state.age}`}</p>
          <input
            type={"text"}
            value={state.name}
            onChange={(e) =>
              dispatch({ type: "setName", name: e.target.value })
            }
          />
          <input
            type={"number"}
            value={state.age}
            onChange={(e) => dispatch({ type: "setAge", age: e.target.value })}
          />
        </>
      );
    }

    return (
      <>
        <p>{`name is ${state.name}`}</p>
        <p>{`age is ${state.age}`}</p>
        <input
          type={"text"}
          value={state.name}
          onChange={(e) => dispatch({ type: "setName", name: e.target.value })}
        />
        <input
          type={"number"}
          value={state.age}
          onChange={(e) => dispatch({ type: "setAge", age: e.target.value })}
        />

        {/* 컨텍스트API 사용하기. */}
        <h3>컨텍스트API를 사용한 코드 예시.</h3>
        <ProfileDispatch.Provider value={dispatch}>
          <SomeComponent />
        </ProfileDispatch.Provider>
      </>
    );
  }

  return (
    <>
      <h2>useReducer 훅 : 컴포넌트의 상탯값을 리덕스처럼 관리하기.</h2>
      <Profile />
      <p>리덕스의 리듀서처럼 관리가 가능하다.</p>
      <p>
        <strong>* 트리의 깊은 곳으로 이벤트 처리 함수 전달하기 *</strong>
        <br />
        보통 자식 컴포넌트에서 상탯값을 변경하기 위해선, 상위 컴포넌트에서
        다수의 상탯값을 관리한다.
        <br />
        이러한 작업은 코드의 가독성이 떨어지는 단점이 있다.
        <br />
        콘텍스트 API와 함께 사용하면 상위컴포넌트에서 트리의 깊은 곳으로 이벤트
        처리 함수를 쉽게 전달할 수 있다.
      </p>
    </>
  );
}
export default UseReducer;
