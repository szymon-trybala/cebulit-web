import {
  LoginOutlined,
  LogoutOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Badge, Button } from "antd";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../core/store/hooks";
import { clearUser } from "../../core/store/slices/auth/authSlice";
import Cart from "../../features/cart/Cart";
import { routes } from "../../router/routes";

const UserActions: React.FC = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const user = useAppSelector((x) => x.authSlice.user);
  const cartBuild = useAppSelector((x) => x.cartSlice.build);

  const [cartModalVisible, setCartModalVisible] = useState(false);

  const handleLogout = () => {
    dispatch(clearUser());
    localStorage.removeItem("token");
    history.push(routes.landing);
  };

  const handleUserIconClick = () => {
    history.push(routes.userSettings);
  };

  const handleCartVisibilityChange = () => {
    setCartModalVisible(!cartModalVisible);
  };

  return (
    <>
      {user ? (
        <>
          <Button
            onClick={handleLogout}
            type="ghost"
            size="large"
            icon={<LogoutOutlined />}
          />
          <Button
            onClick={handleUserIconClick}
            type="ghost"
            size="large"
            icon={<UserOutlined />}
          >
            {user.login}
          </Button>
          {cartBuild ? (
            <Badge count={1}>
              <Button
                onClick={handleCartVisibilityChange}
                type="ghost"
                size="large"
                icon={<ShoppingCartOutlined />}
              />
            </Badge>
          ) : (
            <Button
              onClick={handleCartVisibilityChange}
              type="ghost"
              size="large"
              icon={<ShoppingCartOutlined />}
            />
          )}

          <Cart
            isModalVisible={cartModalVisible}
            onClose={handleCartVisibilityChange}
          />
        </>
      ) : (
        <Link to={routes.login}>
          <Button
            type="ghost"
            size="large"
            shape="circle"
            icon={<LoginOutlined />}
          ></Button>
        </Link>
      )}
    </>
  );
};

export default UserActions;
