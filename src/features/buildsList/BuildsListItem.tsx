import { List, Image } from "antd";
import React, { useState } from "react";
import Header from "../../common/text/Header";
import { Build, StorageInterface } from "../../core/api/builds/models";
import BuildPreview from "../buildPreview/BuildPreview";
import { BuildsHorizontalListItem } from "./styles";

interface BuildsListItemProps {
  build: Build;
}

const BuildsListItem: React.FC<BuildsListItemProps> = ({ build }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <>
      <BuildsHorizontalListItem onClick={toggleModal}>
        <List.Item.Meta
          avatar={
            <Image
              width={140}
              preview={false}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
          }
          title={<Header>{build.name}</Header>}
          description={
            <>
              <div>Procesor: {build.processor.name}</div>
              <div>Płya główna: {build.motherboard.name}</div>
              <div>RAM: {build.memory.capacity} GB</div>
              {build.storage.map((x) => (
                <div>
                  {x.capacity} GB {StorageInterface[x.interface]}
                </div>
              ))}
              {build.graphicsCard && (
                <div>Karta graficzna: {build.graphicsCard.name}</div>
              )}
            </>
          }
        />
        <Header size="larger">{build.price} zł</Header>
      </BuildsHorizontalListItem>
      <BuildPreview
        build={build}
        onOk={toggleModal}
        onCancel={toggleModal}
        visible={modalVisible}
      />
    </>
  );
};

export default BuildsListItem;
