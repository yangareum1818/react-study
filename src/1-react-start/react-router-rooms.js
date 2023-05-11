import React from "react";
import { Link, Route, Routes } from "react-router-dom";

function Rooms({ match }) {
  return (
    <>
      <h2>여기는 방을 소개하는 페이지입니다.</h2>
      <Link to="/blueRoom">요기는 파란 방입니다.</Link>
      <br />
      <Link to="/greenRoom">요기는 초록 방입니다.</Link>

      <Routes>
        <Route path="/:roomId" Component={Room} />
        <Route exact render={() => <h3>방을 선택해주세요.</h3>} />
      </Routes>
    </>
  );
}
export default Rooms;

function Room({ match }) {
  return <h2>{`${match.roomId} 방을 선택하셨씁니다.`}</h2>;
}
