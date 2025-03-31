import { createContext, useState, useContext } from "react";

const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("black");
  const [subcolor, setSubColor] = useState("red");

  return (
    <ColorContext.Provider value={{ color, subcolor, setColor, setSubColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColor = () => useContext(ColorContext);

export default ColorContext;
