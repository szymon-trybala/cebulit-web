import { LoginOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../core/store/hooks";
import { clearUser } from "../../core/store/slices/auth/authSlice";
import { routes } from "../../router/routes";

const UserActions: React.FC = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const user = useAppSelector((x) => x.authSlice.user);

  const handleLogout = () => {
    dispatch(clearUser());
    localStorage.removeItem("token");
    history.push(routes.landing);
  };

  const handleUserIconClick = () => {
    history.push(routes.userSettings);
  };

  return (
    <>
      {user ? (
        <>
          <Button
            onClick={handleUserIconClick}
            type="ghost"
            size="large"
            icon={<UserOutlined />}
          >
            {user.login}
          </Button>
          <Button
            onClick={handleLogout}
            type="ghost"
            size="large"
            icon={<LogoutOutlined />}
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
