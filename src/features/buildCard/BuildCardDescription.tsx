import { Button, Space } from "antd";
import React from "react";
import { Build } from "../../core/api/builds/models";
import {
  CarouselBottomAction,
  CarouselBottomActionsContainer,
  CarouselCardDescItem,
  CarouselCardPrice,
} from "./styles";
import { ShoppingOutlined } from "@ant-design/icons";

interface BuildCardDescriptionProps {
  build: Build;
}

const BuildCardDescription: React.FC<BuildCardDescriptionProps> = ({
  build,
}) => {
  return (
    <>
      <CarouselCardDescItem>
        Procesor: {build.processor.name}
      </CarouselCardDescItem>
      <CarouselCardDescItem>
        Płyta główna: {build.motherboard.name}
      </CarouselCardDescItem>
      <CarouselCardDescItem>
        RAM: {build.memory.capacity} GB {build.memory.speed} MHz
      </CarouselCardDescItem>
      <CarouselCardDescItem>
        Karta graficzna: {build.graphicsCard.name}
      </CarouselCardDescItem>

      <CarouselBottomActionsContainer>
        <CarouselBottomAction>
          <Space align="baseline">
            <CarouselCardPrice>{build.price} zł</CarouselCardPrice>
            <Button
              type="dashed"
              size="large"
              shape="circle"
              icon={<ShoppingOutlined />}
            />
          </Space>
        </CarouselBottomAction>
      </CarouselBottomActionsContainer>
      <Space></Space>
    </>
  );
};

export default BuildCardDescription;
