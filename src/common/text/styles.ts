import Text from "antd/lib/typography/Text";
import styled from "styled-components";

export const TitleContainer = styled.div`
  text-align: center;
`;

export const TitleGradient = styled(Text)`
  font-weight: 500;
  font-size: clamp(3rem, -0.875rem + 8.333vw, 8rem);
  background-image: -webkit-linear-gradient(45deg, #f3ec78, #af4261);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const SubtitleGradient = styled(Text)`
  font-weight: bold;
  font-size: clamp(1.5rem, -0.875rem + 8.333vw, 3rem);
  background-color: blue;
  background-image: -webkit-linear-gradient(to right, #30cfd0 0%, #330867 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
