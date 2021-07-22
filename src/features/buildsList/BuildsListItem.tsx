import { ShoppingCartOutlined } from "@ant-design/icons";
import { List, Button } from "antd";
import React, { useState } from "react";
import BuildDetails from "../../common/build/BuildDetails";
import Header from "../../common/text/Header";
import { Build } from "../../core/api/builds/models";
import { useAppDispatch, useAppSelector } from "../../core/store/hooks";
import { setCartBuild } from "../../core/store/slices/cart/cartSlice";
import BuildPreview from "../buildPreview/BuildPreview";
import {
  BuildsHorizontalListItem,
  BuildListItemTitleContainer,
  BuildListItemImage,
} from "./styles";

interface BuildsListItemProps {
  build: Build;
}

const BuildsListItem: React.FC<BuildsListItemProps> = ({ build }) => {
  const dispatch = useAppDispatch();
  const loggedIn = useAppSelector((x) => x.authSlice.user !== undefined);
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleAddToCartButtonClick = () => {
    dispatch(setCartBuild(build));
  };

  return (
    <>
      <BuildsHorizontalListItem>
        <List.Item.Meta
          avatar={
            <BuildListItemImage
              onClick={toggleModal}
              width={140}
              preview={false}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
          }
          title={
            <BuildListItemTitleContainer onClick={toggleModal}>
              <Header>{build.name}</Header>
            </BuildListItemTitleContainer>
          }
          description={<BuildDetails build={build} />}
        />

        <Header size="larger">
          {build.price} zł{" "}
          {loggedIn && (
            <Button
              onClick={handleAddToCartButtonClick}
              type="dashed"
              shape="circle"
              size="large"
              icon={<ShoppingCartOutlined />}
            />
          )}
        </Header>
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
