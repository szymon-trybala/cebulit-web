import React from "react";
import { SubtitleGradient, TitleContainer, TitleGradient } from "./styles";

interface TitleProps {
  size: "xxl" | "xl" | "large";
}

const Title: React.FC<TitleProps> = ({ children, size }) => {
  return (
    <TitleContainer>
      {size === "xxl" ? (
        <TitleGradient>{children}</TitleGradient>
      ) : (
        <SubtitleGradient>{children}</SubtitleGradient>
      )}
    </TitleContainer>
  );
};

export default Title;
