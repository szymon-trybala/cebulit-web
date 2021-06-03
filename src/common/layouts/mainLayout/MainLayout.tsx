import React from "react";
import {
  SiteHeader,
  SiteContentContainer,
  SiteContent,
  SiteFooter,
  SiteLogo,
  SiteLayout,
} from "./styles";
import { Menu } from "antd";

const MainLayout: React.FC = ({ children }) => {
  return (
    <SiteLayout>
      <SiteHeader>
        <SiteLogo />
        <Menu theme="light" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">Lista</Menu.Item>
          <Menu.Item key="2">Stwórz zestaw</Menu.Item>
        </Menu>
      </SiteHeader>
      <SiteContentContainer>
        <SiteContent>{children}</SiteContent>
      </SiteContentContainer>
      <SiteFooter>Cebulit ©2021 Szymon Trybała</SiteFooter>
    </SiteLayout>
  );
};

export default MainLayout;
