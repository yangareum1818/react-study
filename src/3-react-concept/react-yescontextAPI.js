import React, { useState } from "react";

const UserContext = React.createContext("");

function YesContextAPI() {
  // username상탯값이 변경되면 Big는 렌더링 된다.
  const [username, setUsername] = useState("");

  function Big() {
    return (
      <>
        <UserContext.Provider value={username}>
          {" "}
          {/*value값은 input의 value값을 가져온다. */}
          <div>상단 메뉴</div>
          <Middle />
          <div>하단 메뉴</div>
        </UserContext.Provider>

        <input
          type={"text"}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </>
    );
  }

  const Middle = React.memo(() => {
    // 렌더링방지로 React.memo사용
    return (
      <>
        <Small />
      </>
    );
  });

  function Small() {
    return (
      <UserContext.Consumer>
        {(username) => <p>{`${username}님 안녕하세요.`}</p>}
      </UserContext.Consumer>
    );
  }

  return (
    <>
      <h2>ContextAPI를 활용한 코드 그리고 렌더링을 막기위해 React.memo사용</h2>
      <Big />
      <p>createContext함수를 호출하면 콘텍스트 객체가 생성된다.</p>
      <h4>React.createContext(defaultValue) = Provider, Consumer</h4>
      <p>
        상위컴포넌트에는 Provider, 하위컴포넌트에는 Consumer를 사용한다.
        <br />
        Consumer컴포넌트는 데이터를 찾기 위해 상위로 올라가면서 가까운
        Provider컴포넌트를 찾는다.
        <br />
        최상단까지 올라갔을 때, Provider를 찾지 못하면 기본값을 사용한다.
        <br />
        Provider 컴포넌트 속성값이 변경되면 모든 Consumer는 다시 렌더링된다.
        <br />
        !중간에 위치한 컴포넌트의 렌더링 여부와 상관없이 Consumer가 렌더링된다!
        <br />
        렌더링 방지를 위해 React.memo를 사용한다.
      </p>
    </>
  );
}
export default YesContextAPI;
