import React, { useState } from "react";
import { Card, Space } from "antd";
import { Build } from "../../core/api/builds/models";
import { BuildCardImage, CarouselCard } from "./styles";
import BuildCardDescription from "./BuildCardDescription";
import BuildPreview from "../buildPreview/BuildPreview";
import Header from "../../common/text/Header";

interface BuildCardProps {
  build: Build;
  randomImg?: boolean;
}

const BuildCard: React.FC<BuildCardProps> = ({ build, randomImg }) => {
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
            src={
              randomImg
                ? "https://upload.wikimedia.org/wikipedia/commons/4/46/Question_mark_%28black%29.svg"
                : build.photoUrl
            }
            fallback="https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"
          />
        }
      >
        <Card.Meta
          title={build.name}
          description={<BuildCardDescription build={build} />}
        />
        <Space align="end">
          <Header>{build.price} zł</Header>
        </Space>
      </CarouselCard>
      <BuildPreview
        build={build}
        onOk={toggleModal}
        onCancel={toggleModal}
        visible={modalVisible}
        randomImg={randomImg}
      />
    </>
  );
};

export default BuildCard;
