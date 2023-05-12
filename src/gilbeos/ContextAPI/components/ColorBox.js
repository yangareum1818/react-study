import React from "react";
import { ColorConsumer } from "../contexts/color";

const ColorBox = () => {
  return (
    <>
      <h2>ContextAPI 사용 법 익히기.</h2>
      <h3>ContextAPI Provider, Consumer으로 state값 전달하기</h3>
      <ColorConsumer>
        {({ state }) => (
          <>
            <div
              style={{
                width: "64px",
                height: "64px",
                background: state.color,
              }}
            />
            <div
              style={{
                width: "32px",
                height: "32px",
                background: state.subcolor,
              }}
            />
          </>
        )}
      </ColorConsumer>
    </>
  );
};
export default ColorBox;
