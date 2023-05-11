import { BrowserRouter } from "react-router-dom";
import ImmerState from "../gilbeos/immer";
import ReducerCounter from "../gilbeos/ReducerCustomHook/ReducerCount";
import ReducerInput from "../gilbeos/ReducerCustomHook/ReducerInput";
import RouterMain from "../gilbeos/Router/RouterMain";
import Average from "../gilbeos/useHook";

function Gilbeos() {
  return (
    <>
      <h1>[리액트를 다루는 기술]</h1>
      <Average />
      <ReducerCounter />
      <ReducerInput />
      <ImmerState />
      <BrowserRouter>
        <RouterMain />
      </BrowserRouter>
    </>
  );
}
export default Gilbeos;
