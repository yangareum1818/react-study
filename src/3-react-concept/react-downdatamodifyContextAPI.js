import React, { useState } from "react";

export default function DownDataModifyContextAPI() {
  const UserContext = React.createContext({ username: "", helloCount: 0 });
  const SetUserContext = React.createContext(() => {});
  const [user, setUser] = useState({ username: "eille", helloCount: 0 });

  function Top() {
    return (
      <>
        <SetUserContext.Provider value={setUser}>
          <UserContext.Provider value={user}>
            <Middle />
          </UserContext.Provider>
        </SetUserContext.Provider>
      </>
    );
  }

  function Middle() {
    return <Down />;
  }

  function Down() {
    return (
      <>
        <SetUserContext.Consumer>
          {(setUser) => (
            <UserContext.Consumer>
              {({ username, helloCount }) => (
                <React.Fragment>
                  <p>{`${username}님 안녕하시와요? ㅋㅋ`}</p>
                  <p>{`인사 횟수 : ${helloCount}`}</p>
                  <button
                    onClick={() =>
                      setUser({ username, helloCount: helloCount + 1 })
                    }
                  >
                    인사하기
                  </button>
                </React.Fragment>
              )}
            </UserContext.Consumer>
          )}
        </SetUserContext.Consumer>
      </>
    );
  }

  return (
    <>
      <h2>하위 컴포넌트에서 콘텍스트 함수전달하고 데이터 수정하기</h2>
      <Top />
    </>
  );
}
