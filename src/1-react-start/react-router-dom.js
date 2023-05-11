import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Rooms from "./react-router-rooms";

function ReactRouterDom() {
  const Menu = styled.div`
    padding: 20px;
    border: 5px solid gray;
  `;

  return (
    <BrowserRouter>
      <Menu>
        <Link to="/">홈</Link>
        <Link to="/photo">사진</Link>
        <Link to="/rooms">방 소개</Link>

        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/photo" Component={Photo} />
          <Route exact path="/rooms" Component={Rooms} />
        </Routes>
      </Menu>
    </BrowserRouter>
  );
}
export default ReactRouterDom;

function Home({ match }) {
  return <h2>이곳은 메인 홈페이지입니다.</h2>;
}

function Photo({ match }) {
  return <h2>여기서 사진을 감상해보세요.</h2>;
}
