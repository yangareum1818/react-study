function NoContextAPI() {
  function Big() {
    return (
      <>
        <div>상단 메뉴</div>
        <Middle username={"Eille"} />
        <div>하단 메뉴</div>
      </>
    );
  }

  function Middle({ username }) {
    return (
      <>
        <Small username={username} />
      </>
    );
  }

  function Small({ username }) {
    return <p>{`${username}님 안녕하세요.`}</p>;
  }

  return (
    <>
      <h2>ContextAPI를 활용하지 않은 코드</h2>
      <Big />
    </>
  );
}
export default NoContextAPI;
