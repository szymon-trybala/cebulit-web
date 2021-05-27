import React from "react";
import { Card } from "antd";
import { Build } from "../../core/api/builds/models";
import { BuildCardImage, CarouselCard } from "./styles";
import BuildCardDescription from "./BuildCardDescription";

interface BuildCardProps {
  build: Build;
}

const BuildCard: React.FC<BuildCardProps> = ({ build }) => {
  return (
    <CarouselCard
      cover={
        <BuildCardImage
          preview={false}
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
    >
      <Card.Meta
        title={build.name}
        description={<BuildCardDescription build={build} />}
      />
    </CarouselCard>
  );
};

export default BuildCard;
