import { CheckOutlined, ClearOutlined } from "@ant-design/icons";
import { Button, Card, Drawer } from "antd";
import React from "react";
import BuildDetails from "../../common/build/BuildDetails";
import EmptyFeedback from "../../common/feedbacks/EmptyFeedback";
import Restrict from "../../common/security/Restrict";
import Header from "../../common/text/Header";
import { userService } from "../../core/api/auth/userService";
import { useAppDispatch, useAppSelector } from "../../core/store/hooks";
import { removeCartBuild } from "../../core/store/slices/cart/cartSlice";
import { CartImage, CartPriceContainer } from "./styles";
import { alert } from "../../common/alerts/alerts";

interface CartProps {
  isModalVisible: boolean;
  onClose: () => any;
}

const Cart: React.FC<CartProps> = ({ isModalVisible, onClose }) => {
  const dispatch = useAppDispatch();
  const cartBuild = useAppSelector((x) => x.cartSlice.build);

  const handleClearCart = () => {
    dispatch(removeCartBuild());
  };

  const handleBuyNow = async () => {
    if (!cartBuild) return;
    try {
      await userService.orderBuild({ buildId: cartBuild.id });
      dispatch(removeCartBuild());
      alert.success(`Zamówiono zestaw`); // TODO - widok potwierdzenia zakupu
    } catch (error) {
      alert.error(`${error}`);
    }
  };

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
            <Card
              cover={
                <CartImage
                  width="250px"
                  preview={false}
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
              }
              actions={[
                <Button
                  onClick={handleBuyNow}
                  icon={<CheckOutlined />}
                  type="primary"
                  size="large"
                >
                  Kup teraz
                </Button>,
                <Button
                  icon={<ClearOutlined />}
                  onClick={handleClearCart}
                  danger
                  size="large"
                >
                  Wyczyść
                </Button>,
              ]}
            >
              <Card.Meta
                title={cartBuild.name}
                description={
                  <>
                    <BuildDetails build={cartBuild} />
                    <CartPriceContainer>
                      <Header>{cartBuild.price} zł</Header>
                    </CartPriceContainer>
                  </>
                }
              />
            </Card>
          ) : (
            <EmptyFeedback feedback="Dodaj komputer do koszyka" />
          )}
        </>
      </Restrict>
    </Drawer>
  );
};

export default Cart;
