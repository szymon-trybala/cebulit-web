import { Card } from "antd";
import styled from "styled-components";

export const CarouselCard = styled(Card)`
  height: 475px;
  margin-left: 10px;
  margin-right: 10px;
`;

export const CarouselCardDescItem = styled.div`
  line-height: 25px;
  font-size: 10;
`;

export const CarouselCardPrice = styled.div`
  color: black;
  font-size: 18px;
  font-weight: bolder;
`;

export const CarouselBottomActionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
`;

export const CarouselBottomAction = styled.div`
  flex: none;
  margin: 8px 4px;
  padding: 4px;
`;
