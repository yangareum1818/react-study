import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };

    case "DECREMENT":
      return { value: state.value - 1 };

    default:
      return state;
  }
}

function ReducerCounter() {
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <>
      <h2>useReducer Hook, Custom Hook 만들기</h2>
      <h3>Count</h3>
      <p>
        현재 카운터 값은 <b>{state.value}</b>입니다.
      </p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}> + 1 </button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}> - 1 </button>
    </>
  );
}
export default ReducerCounter;
