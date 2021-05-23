import { Card, Image, Row } from "antd";
import styled from "styled-components";

export const CarouselCard = styled(Card)`
  border-radius: 15px;
  min-height: 450px;
  max-height: 650px;
  margin-left: 10px;
  margin-right: 10px;
`;

export const BuildCardImage = styled(Image)`
  max-height: 275px;
`;

export const CarouselCardDescContainer = styled(Row)`
  height: 200px;
`;

export const CarouselCardDescItem = styled.div`
  line-height: 25px;
`;

export const CarouselCardPrice = styled.div`
  color: black;
  font-size: large;
  font-weight: bolder;
  vertical-align: text-bottom;
`;
