import { Drawer } from "antd";
import React from "react";
import EmptyFeedback from "../../common/feedbacks/EmptyFeedback";
import Restrict from "../../common/security/Restrict";
import { useAppSelector } from "../../core/store/hooks";
import BuildsListItem from "../buildsList/BuildsListItem";

interface CartProps {
  isModalVisible: boolean;
  onClose: () => any;
}

const Cart: React.FC<CartProps> = ({ isModalVisible, onClose }) => {
  const cartBuild = useAppSelector((x) => x.cartSlice.build);

  return (
    <Drawer
      width="400px"
      title="Koszyk"
      visible={isModalVisible}
      onClose={onClose}
      placement="right"
    >
      <Restrict>
        <>
          {cartBuild ? (
            <BuildsListItem build={cartBuild} />
          ) : (
            <EmptyFeedback feedback="Dodaj komputer do koszyka" />
          )}
        </>
      </Restrict>
    </Drawer>
  );
};

export default Cart;
