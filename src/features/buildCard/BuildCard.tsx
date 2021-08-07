import React, { useState } from "react";
import { Card } from "antd";
import { Build } from "../../core/api/builds/models";
import { BuildCardImage, CarouselCard } from "./styles";
import BuildCardDescription from "./BuildCardDescription";
import BuildPreview from "../buildPreview/BuildPreview";

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
            width={250}
            height={250}
            fallback="https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"
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
        randomImg={randomImg}
      />
    </>
  );
};

export default BuildCard;
