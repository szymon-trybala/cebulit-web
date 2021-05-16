import React from "react";
import { SubtitleGradient, TitleContainer, TitleGradient } from "./styles";

interface TitleProps {
  size: "huge" | "big";
}

const Title: React.FC<TitleProps> = ({ children, size }) => {
  return (
    <TitleContainer>
      {size === "huge" ? (
        <TitleGradient>{children}</TitleGradient>
      ) : (
        <SubtitleGradient>{children}</SubtitleGradient>
      )}
    </TitleContainer>
  );
};

export default Title;
