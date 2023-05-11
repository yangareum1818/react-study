import { useEffect, useState } from "react";

function History() {
  const [pageName, setPageName] = useState("");

  useEffect(() => {
    window.onpopstate = function (e) {
      setPageName(e.state);
    };
  }, []);

  function onClick1() {
    const pageName = "page1";
    window.history.pushState(pageName, "", "/page1");
    setPageName(pageName);
  }

  function onClick2() {
    const pageName = "page2";
    window.history.pushState(pageName, "", "/page2");
    setPageName(pageName);
  }

  return (
    <>
      <h1>1장. 리액트 라우터</h1>
      <button onClick={onClick1}>PAGE1</button>
      <button onClick={onClick2}>PAGE2</button>

      {!pageName && <Home />}
      {pageName === "page1" && <Page1 />}
      {pageName === "page2" && <Page2 />}
    </>
  );

  function Home() {
    return <h2>여기는 홈페이지입니다. 원하는 페이지 버튼을 클릭하세요.</h2>;
  }

  function Page1() {
    return <h2>여기는 PAGE1입니다.</h2>;
  }

  function Page2() {
    return <h2>여기는 PAGE2입니다.</h2>;
  }
}
export default History;
