import { useEffect, useState } from "react";
// 커스텀훅을 만들면 이런식으로 필요한 부분만 가져와 불러올 수 있다.
// react-hook-custom에서 가져온 Profile 훅이다.
import { useUser, useWindowWidth } from "./react-hook-custom";

function HookUseEffect() {
  const [count, setCount] = useState(0);
  // 만든 커스텀 훅과 userId를 담아서 불러온 뒤 user객체로 출력한다.
  // userId가 변경되면 자동으로 사용자 데이터를 받아와 뿌러준다. 비동기이다.
  // const user = useUser(userId);

  // 창의 너비를 훅에 저장해두고 width값을 불러온다.
  // const width = useWindowWidth();

  useEffect(() => {
    document.title = `업데이트 횟수: ${count}`;
  }, []);

  function Profile({ userId }) {
    const [user, setUser] = useState(null);

    // 두번째 매개변수로 배열을 입력하면, 배열의 값이 변경되는 경우에만 함수가 호출된다.
    // 의존성 배열이라고한다.
    // useEffect(() => {
    //   getUserApi(userId).then((data) => setUser(data));
    // }, [userId]);

    return (
      <div>
        {!user && <p>사용자 정보를 가져오는 중...</p>}
        {user && (
          <>
            <p>{`name is ${user.name}`}</p>
            <p>{`age is ${user.age}`}</p>
          </>
        )}
      </div>
    );
  }

  function WidthPrinter() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
      const onResize = () => setWidth(window.innerWidth);

      window.addEventListener("resize", onResize);

      return () => window.removeEventListener("resize", onResize);
    }, []);

    return <div>{`width is ${width}`}</div>;
  }

  // function HookRuleViolation() {
  //   const [value, setValue] = useState(0);

  //   if (value === 0) {
  //     const [v1, setV1] = useState(0);
  //   } else {
  //     const [v1, setV1] = useState(0);
  //     const [v2, setV2] = useState(0);
  //   }

  //   for (let i = 0; i < value; i++) {
  //     const [num, setNum] = useState(0);
  //   }

  //   function func1() {
  //     const [num, setNum] = useState(0);
  //   }
  // }

  return (
    <>
      <h2>useEffect 훅 사용</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>

      <h2>useEffect 훅에서 API 호출하기</h2>
      <Profile />

      <h2>useEffect 훅을 이용해 이벤트 처리함수를 등록하고 해제하기</h2>
      <p>화면의 창의 넓이가 바뀔 때 마다 넓이값을 보여준다.</p>
      <WidthPrinter />

      <h2>커스텀 훅. 훅 직접 만들기.</h2>
      <p>커스텀 훅의 이름은 use로 시작하는게 좋다.</p>

      <h2>훅 사용시 지켜야 할 규칙</h2>
      <ul>
        <li>
          규칙1. 하나의 컴포넌트에서 훅을 호출하는 순서는 항상 같아야 한다.
        </li>
        <li>
          규칙2. 훅은 함수형 컴포넌트 또는 커스텀 훅 안에서만 호출되어야 한다.
        </li>
      </ul>

      <h3>훅 사용 시 규칙1을 위반한 경우</h3>
      {/* <HookRuleViolation /> */}
      <strong>순서가 보장되지 않는 경우이다.</strong>
      <p>
        1. 조건에 따라 훅을 호출하면 순서가 보장되지 않는다. <br />
        2. 루프 안에서 훅을 호출하는 것도 순서가 보장되지 않는다.
        <br />
        3. func1 함수가 언제 호출될지 알수 없기 때문에 마찬가지로 순서가
        보장되지 않는다.
      </p>
    </>
  );
}
export default HookUseEffect;
