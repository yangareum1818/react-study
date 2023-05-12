import { ColorConsumer } from "../contexts/color";

const colors = ["#f00", "orange", "#ff0", "#0f0", "#00f", "indigo", "violet"];

const SelecColors = () => {
  return (
    <>
      <hr />
      <h3>색상을 선택 하세유 ~</h3>
      <ColorConsumer>
        {({ actions }) => (
          <div style={{ display: "flex" }}>
            {colors.map((color) => (
              <div
                key={color}
                style={{
                  background: color,
                  width: "24px",
                  height: "24px",
                  cursor: "pointer",
                }}
                // 왼쪽 마우스
                onClick={() => actions.setColor(color)}
                // 오른쪽 마우스
                onContextMenu={(e) => {
                  e.preventDefault();
                  actions.setSubcolor(color);
                }}
              />
            ))}
          </div>
        )}
      </ColorConsumer>
    </>
  );
};
export default SelecColors;
