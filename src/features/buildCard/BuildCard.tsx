import React, { useState } from "react";
import { Card } from "antd";
import { Build } from "../../core/api/builds/models";
import { BuildCardImage, CarouselCard } from "./styles";
import BuildCardDescription from "./BuildCardDescription";
import BuildPreview from "../buildPreview/BuildPreview";

interface BuildCardProps {
  build: Build;
}

const BuildCard: React.FC<BuildCardProps> = ({ build }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <>
      <CarouselCard
        onClick={toggleModal}
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
      <BuildPreview
        build={build}
        onOk={toggleModal}
        onCancel={toggleModal}
        visible={modalVisible}
      />
    </>
  );
};

export default BuildCard;
