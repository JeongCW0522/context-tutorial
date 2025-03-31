import { useColor } from "../context/color";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const SelectColors = () => {
  const { setColor, setSubColor } = useColor(); // 전역 상태 변경 함수 가져오기

  return (
    <div>
      <h2>색상 선택</h2>
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
            onClick={() => setColor(color)} // 왼쪽 클릭 → color 변경
            onContextMenu={(e) => {
              e.preventDefault(); // 기본 우클릭 메뉴 방지
              setSubColor(color); // 오른쪽 클릭 → subcolor 변경
            }}
          />
        ))}
      </div>
      <hr />
    </div>
  );
};

export default SelectColors;
