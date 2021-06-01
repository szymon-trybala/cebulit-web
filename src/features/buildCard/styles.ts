import { Card, Image, Row } from "antd";
import styled from "styled-components";

export const CarouselCard = styled(Card)`
  border-radius: 15px;
  min-height: 450px;
  max-height: 650px;
  margin: 0 10px 0 10px;
  cursor: pointer;
  :hover {
    border: 3px dotted #ac3b61;
    background-image: -webkit-linear-gradient(45deg, #edc7b7, #ac3b61);
    background: #fff;
  }
`;

export const BuildCardImage = styled(Image)`
  padding: 10px;
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
