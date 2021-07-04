import React from "react";
import { LargerHeader, NormalHeader } from "./styles";

interface HeaderProps {
  size?: "larger" | "normal";
}

const Header: React.FC<HeaderProps> = ({ children, size }) => {
  return (
    <>
      {(!size || size === "normal") && <NormalHeader>{children}</NormalHeader>}
      {size === "larger" && <LargerHeader>{children}</LargerHeader>}
    </>
  );
};

export default Header;
