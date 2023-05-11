import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

function ReactGutsHook() {
  const UserContext = React.createContext();
  const user = { name: "eille", age: 24 };

  function ParentComponent() {
    return (
      <>
        <h2>useContext 훅 사용하지 않고 콘텍스트 API사용하기</h2>
        <UserContext.Provider value={user}>
          <ChildComponent />
        </UserContext.Provider>
      </>
    );
  }

  function ChildComponent() {
    // useContext훅 사용한 부분. ( JSX부분은 복잡해지는 단점이지만, 훅 사용엔 간편하단 장점이 있다. )
    const user = useContext(UserContext);
    console.log(`user: ${user.name}, ${user.age}`);

    return (
      <>
        <UserContext.Consumer>
          {(user) => (
            <>
              <p>{`name is ${user.name}`}</p>
              <p>{`age is ${user.age}`}</p>
            </>
          )}
        </UserContext.Consumer>
      </>
    );
  }

  function Profile() {
    const [age, setAge] = useState(29);
    const prevAgeRef = useRef(29);

    useEffect(() => {
      prevAgeRef.current = age;
    }, [age]);

    const prevAge = prevAgeRef.current;
    const text = age === prevAge ? "same" : age > prevAge ? "older" : "younger";

    return (
      <>
        <h2>렌더링과 무관한 값 저장하기 : useRef</h2>
        <h3>useRef 훅을 이용해서 이전 상탯값 저장하기.</h3>
        <p>{`age ${age} is ${text} than age ${prevAge}`}</p>
        <button
          onClick={() => {
            const age = Math.floor(Math.random() * 50 + 1);
            setAge(age);
          }}
        >
          나이 변경하기
        </button>
      </>
    );
  }

  function UseMemo() {
    const [v1, setV1] = useState(0);
    const [v2, setV2] = useState(0);
    const value = useMemo(() => runExpensiveJob(v1, v2), [v1, v2]);
    return (
      <>
        <h3>useMemo훅 알아보기.</h3>
        <p>{`value is  ${value}`}</p>
        <button
          onClick={() => {
            setV1(Math.random());
            setV2(Math.random());
          }}
        >
          랜덤 숫자
        </button>
        <p>
          useMemo 훅은 계산ㄴ량이 많은 함수의 반환값을 재활용하는 용도로
          사용된다.
          <br />
          첫번째 매개변수 : 함수
          <br />
          두번째 매개변수 : 의존성 배열
          <br />
          의존성 배열이 변경되지 않으면 이전에 반환된 값을 재사용하고, 변경되면
          첫 번째 매개변수로 입력된 함수를 실행하고 그 반환값을 기억한다.
        </p>
      </>
    );
  }
  function runExpensiveJob(v1, v2) {
    return v1 + v2;
  }

  function UseCallBack() {
    function Profile() {
      const [name, setName] = useState("");
      const [age, setAge] = useState(0);
      // useCallbak 훅 사용하기.
      // const onSave = useCallback(() => saveToServer(name, age), [name, age]);

      return (
        <>
          <p>{`name is ${name}`}</p>
          <p>{`age is  ${age}`}</p>
          {/* 사용자의 정보를 불러온 API컴포넌트이다. */}
          {/* useCallback훅을 사용하지 않았을 때 */}
          {/* <UserEdit
            onSave={() => saveToSever(name, age)}
            setName={setName}
            setAge={setAge}
          /> */}

          {/* useCallback 훅을 사용했을 때 */}
          {/* <UserEdit
            onSave={onSave} setName={setName} setAge={setAge}
          /> */}
        </>
      );
    }

    return (
      <>
        <h3>useCallback 훅 알아보기.</h3>
        <p>useCallback 훅은 리액트의 렌더링 성능을 위해 제공되는 훅이다.</p>
        <p>
          컴포넌트가 렌더링 될 때마다 새로운 함수를 생성해서 자식 컴포넌트의
          속성값으로 입력하는 경우가 많다.
          <br />
          속성값이 매번 변경되기 때문에 자식 컴포넌트에서 React.memo를 사용해도
          불필요한 렌더링이 발생한다는 문제점이 있다.
          <br />이 문제를 해결하기 위해 useCallback훅을 제공하는데 훅이 필요한
          예를 보자.
        </p>
        <Profile />
        <p>
          useCallback 훅을 사용하는 했을 때의 예시이다. <br />
          const onSave = useCallback(()= saveToServer(name, age), [name, age])
          <br />
          두번째 매개변수인 의존성 배열이다. 값이 변경 될 때 호출된다.
          <br />
        </p>
      </>
    );
  }

  function UseMemoAndUseCallback() {
    return (
      <>
        <h2>메모이제이션 훅 : useMemo, useCallback</h2>
        <UseMemo />
        <UseCallBack />
      </>
    );
  }

  return (
    <>
      <ParentComponent />
      <Profile />
      <UseMemoAndUseCallback />
    </>
  );
}
export default ReactGutsHook;
