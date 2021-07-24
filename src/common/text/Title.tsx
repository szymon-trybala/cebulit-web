import React from "react";
import {
  SubtitleGradient,
  SubtitleWithoutGradient,
  TitleContainer,
  TitleGradient,
} from "./styles";

interface TitleProps {
  size: "xxl" | "xl" | "large";
}

const Title: React.FC<TitleProps> = ({ children, size }) => {
  return (
    <TitleContainer>
      {size === "xxl" ? (
        <TitleGradient>{children}</TitleGradient>
      ) : size === "xl" ? (
        <SubtitleGradient>{children}</SubtitleGradient>
      ) : (
        <SubtitleWithoutGradient>{children}</SubtitleWithoutGradient>
      )}
    </TitleContainer>
  );
};

export default Title;
