import React, { useState } from "react";

function Todo({ title, desc }) {
  const [priority, setPriority] = useState("heigh");

  function onClick() {
    setPriority(priority === "heigh" ? "low" : "heigh");
  }

  const Title = React.memo(({ title }) => {
    return <p style={{ color: "blue" }}>{title}</p>;
  });

  return (
    <>
      <h2>리액트 요소가 돔 요소로 만들어지는 과정</h2>
      <Title title={title} />
      <p>{desc}</p>
      <p>{priority === "heigh" ? "우선순위 높음" : "우선순위 낮음"}</p>
      <button onClick={onClick}>우선순위 변경</button>
    </>
  );
}
export default Todo;
