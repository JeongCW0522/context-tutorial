import { useColor } from "../context/color";

const ColorBox = () => {
  const { color, subcolor } = useColor(); // 전역 상태 가져오기

  return (
    <>
      <div style={{ width: "64px", height: "64px", background: color }} />
      <div style={{ width: "32px", height: "32px", background: subcolor }} />
    </>
  );
};

export default ColorBox;
