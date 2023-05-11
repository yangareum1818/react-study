import StateProperty from "../3-react-concept/react-state-property";
import Element from "../3-react-concept/react-element";
import Todo from "../3-react-concept/react-todo";
import HookUseState from "../3-react-concept/react-hook-useState";
import HookUseEffect from "../3-react-concept/react-hook-uesEffect";
import NoContextAPI from "../3-react-concept/react-NocontextAPI";
import YesContextAPI from "../3-react-concept/react-yescontextAPI";
import OverLapContextAPI from "../3-react-concept/react-overlapContextAPI";
import DownDataModifyContextAPI from "../3-react-concept/react-downdatamodifyContextAPI";
import TextInputMovie from "../3-react-concept/react-useRef";
import ReactGutsHook from "../3-react-concept/react-gutsHook";
import UseReducer from "../3-react-concept/react-useReducer";
import UseImperativeHandle from "../3-react-concept/react-useImperativeHandle";

function ReactConcept() {
  return (
    <>
      {/* 3장 */}
      <StateProperty />
      <hr />
      <Element />
      <hr />
      <Todo
        title="리액트 공부하기"
        desc="실전 리액트 프로그래밍을 열심히 읽는다."
      />
      <hr />
      <HookUseState />
      <hr />
      <HookUseEffect />
      <hr />
      <NoContextAPI />
      <hr />
      <YesContextAPI />
      <hr />
      <OverLapContextAPI />
      <hr />
      <DownDataModifyContextAPI />
      <hr />
      <TextInputMovie />
      <hr />
      <ReactGutsHook />
      <hr />
      <UseReducer />
      <hr />
      <UseImperativeHandle />
    </>
  );
}
export default ReactConcept;
