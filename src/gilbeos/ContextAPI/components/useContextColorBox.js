import { useContext } from "react";
import ColorContext from "../contexts/color";

const UseContextColorBox = () => {
  const { state } = useContext(ColorContext);

  return (
    <>
      <h3>useContext Hook 사용해 state값 전달하기.</h3>
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
  );
};
export default UseContextColorBox;
