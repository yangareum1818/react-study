import { createContext, useState } from "react";

// value에 상탯값 또는 함수를 전달할 수 있다.
const ColorContext = createContext({
  state: { color: "#000", subcolor: "#f00" },
  actions: {
    setColor: () => {},
    setSubcolor: () => {},
  },
});

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("#000");
  const [subcolor, setSubcolor] = useState("#f00");

  const value = {
    state: { color, subcolor },
    actions: { setColor, setSubcolor },
  };

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};
// export default ColorProvider;

// const ColorConsumer = ColorContext.Consumer와 같은 의미
const { Consumer: ColorConsumer } = ColorContext;

// ColorProvider와 ColorConsumer 내보내기
export { ColorProvider, ColorConsumer };

export default ColorContext;
