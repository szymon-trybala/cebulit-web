import { Col } from "antd";
import React from "react";
import { Build } from "../../core/api/builds/models";
import { CarouselCardDescContainer, CarouselCardDescItem } from "./styles";

interface BuildCardDescriptionProps {
  build: Build;
}

const BuildCardDescription: React.FC<BuildCardDescriptionProps> = ({
  build,
}) => {
  return (
    <CarouselCardDescContainer>
      <Col flex="1fr">
        <CarouselCardDescItem>
          Procesor: {build.processor.name}
        </CarouselCardDescItem>
        <CarouselCardDescItem>
          Płyta główna: {build.motherboard.name}
        </CarouselCardDescItem>
        <CarouselCardDescItem>
          RAM: {build.memory.capacity} GB {build.memory.speed} MHz
        </CarouselCardDescItem>
        {build.graphicsCard && (
          <CarouselCardDescItem>
            Karta graficzna: {build.graphicsCard.name}
          </CarouselCardDescItem>
        )}
      </Col>
    </CarouselCardDescContainer>
  );
};

export default BuildCardDescription;
