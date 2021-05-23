import React from "react";
import {
  SiteHeader,
  SiteContentContainer,
  SiteContent,
  SiteFooter,
  SiteLogo,
} from "./styles";
import { Menu } from "antd";

const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <SiteHeader>
        <SiteLogo />
        <Menu theme="light" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">Nav 1</Menu.Item>
          <Menu.Item key="2">Nav 2</Menu.Item>
        </Menu>
      </SiteHeader>
      <SiteContentContainer>
        <SiteContent>{children}</SiteContent>
      </SiteContentContainer>
      <SiteFooter>Cebulit ©2021 Szymon Trybała</SiteFooter>
    </>
  );
};

export default MainLayout;
