import { useState } from "react";

function HookUseState() {
  const [count, setCount] = useState(0);

  // function onClick() {
  //   setCount({ value: count.value + 1 });
  //   setCount({ value: count.value + 1 });
  // }
  function onClick() {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  }

  function onClickBatchedUpdates() {
    // 안정화된 API가 아니므로 꼭 필요한 경우가 아니라면 사용하지 않는다.
    // 미래의 리액트에서 concurrent모드에 사용될 가능성이 있다.
    // ReactDOM.unstable_batchedUpdates(() => {
    //   setCount((prev) => prev + 1);
    //   setCount((prev) => prev + 1);
    // });
  }

  function Profile() {
    const [state, setState] = useState({ name: "", age: 0 });

    return (
      <>
        <p>{`name is ${state.name}`}</p>
        <p>{`age is ${state.age}`}</p>
        <input
          type={"text"}
          value={state.name}
          onChange={(e) => setState({ ...state, name: e.target.value })}
        />
        <input
          type={"number"}
          value={state.age}
          onChange={(e) => setState({ ...state, age: e.target.value })}
        />
      </>
    );
  }

  console.log("render called");

  return (
    <>
      <h2>useState 상탯값 변경해 연속적 함수 호출하기</h2>
      <p>
        상태값 변경 함수가 비동기로 동작하기 때문에 두번증가가 되지 않는다.
        <br />
        리액트가 상탯값 변경 함수를 동기로 처리하면 하나의 상태값 변경 함수가
        호출될 때마다 화면을 다시 그리기 때문에 성능이슈가 생길 수 있다.
        <br />
        만약 동기로 처리하지만 매번 화면에 그리지 않는다면 UI데이터와 화면 간의
        불일치가 발생해서 혼란스러울 수 있다.
      </p>
      <p>{count}</p>
      <button onClick={onClick}>증가</button>
      <br />
      <h2>useState 훅 하나로 여러 상탯값 관리하기.</h2>
      <Profile />
    </>
  );
}
export default HookUseState;
