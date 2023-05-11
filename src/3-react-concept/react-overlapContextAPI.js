import React from "react";

const UserContext = React.createContext("");
const ThemeContext = React.createContext("dark");

function OverLapContextAPI() {
  function Big() {
    return (
      <>
        <ThemeContext.Provider value="light">
          <UserContext.Provider value="eille">
            <div>상단 메뉴</div>
            <Middle />
            <div>하단 메뉴</div>
          </UserContext.Provider>
        </ThemeContext.Provider>
      </>
    );
  }

  function Middle() {
    return <Small />;
  }

  function Small() {
    return (
      <>
        <ThemeContext.Consumer>
          {(theme) => (
            <UserContext.Consumer>
              {(username) => (
                <p
                  style={{ color: theme === "dark" ? "gray" : "green" }}
                >{`${username}님 안녕하세요.`}</p>
              )}
            </UserContext.Consumer>
          )}
        </ThemeContext.Consumer>
      </>
    );
  }

  return (
    <>
      <h2>ContextAPI를 활용한 코드 : 중첩 사용 예시</h2>
      <Big />
    </>
  );
}
export default OverLapContextAPI;
