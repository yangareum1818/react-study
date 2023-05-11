import React, { useState } from "react";

function StateProperty() {
  return (
    <div>
      <State />
      <Property />
    </div>
  );
}
export default StateProperty;

function State() {
  const [color, setColor] = useState("red");
  function onClick() {
    setColor("blue");
  }

  return (
    <div>
      <h2>상태값 이용하기</h2>
      <button style={{ backgroundColor: color }} onClick={onClick}>
        좋아요
      </button>
    </div>
  );
}

function Property() {
  const [count, setCount] = useState(0);

  function onClick() {
    setCount(count + 1);
  }

  function Title({ title }) {
    console.log("count state update");
    return <p>{title}</p>;
  }
  React.memo(Title);

  return (
    <>
      <h1>3장. 리액트 훅 활용하기.</h1>
      <h2>속성값 이용하기</h2>
      <Title title={`현재 카운트 : ${count}`} />
      <button onClick={onClick}>증가</button>
    </>
  );
}
