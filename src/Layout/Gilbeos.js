import { BrowserRouter } from "react-router-dom";
import ColorBox from "../gilbeos/ContextAPI/components/ColorBox";
import SelecColors from "../gilbeos/ContextAPI/components/SelectColors";
import UseContextColorBox from "../gilbeos/ContextAPI/components/useContextColorBox";
import { ColorProvider } from "../gilbeos/ContextAPI/contexts/color";
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

      {/* Provider를 사용할 때, 꼭 value값을 명시해줘야 오류가 나지 않는다. */}
      <ColorProvider>
        <div>
          <ColorBox />
          <UseContextColorBox />
          <SelecColors />
        </div>
      </ColorProvider>
    </>
  );
}
export default Gilbeos;
