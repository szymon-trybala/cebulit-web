import Text from "antd/lib/typography/Text";
import styled from "styled-components";

export const TitleContainer = styled.div`
  text-align: center;
`;

export const TitleGradient = styled(Text)`
  font-weight: 500;
  line-height: 120%;
  font-size: clamp(3rem, -0.875rem + 8.333vw, 8rem);
  background-image: -webkit-linear-gradient(45deg, #edc7b7, #ac3b61);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
`;

export const SubtitleGradient = styled(Text)`
  font-weight: bold;
  line-height: 120%;
  font-size: clamp(1.5rem, -0.875rem + 8.333vw, 2.5rem);
  background-image: -webkit-linear-gradient(45deg, #30cfd0, #123c69);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
`;

export const SubtitleWithoutGradient = styled(Text)`
  line-height: 120%;
  font-size: clamp(1rem, -0.875rem + 8.333vw, 1.5rem);
  display: inline-block;
`;

export const NormalHeader = styled.div`
  color: black;
  font-size: larger;
  font-weight: bolder;
  vertical-align: text-bottom;
`;

export const LargerHeader = styled.div`
  color: black;
  font-size: 20px;
  font-weight: bolder;
  vertical-align: text-bottom;
`;
