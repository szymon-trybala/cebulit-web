import React from "react";
import {
  SiteHeader,
  SiteContentContainer,
  SiteContent,
  SiteFooter,
  SiteLogo,
  SiteLayout,
  MainLayoutPulledRightMenuItem,
} from "./styles";
import { Menu } from "antd";
import { Link, useHistory } from "react-router-dom";
import { routes } from "../../../router/routes";
import UserActions from "../../userActions/UserActions";

const MainLayout: React.FC = ({ children }) => {
  const history = useHistory();

  return (
    <SiteLayout>
      <SiteHeader>
        <Link to={routes.home}>
          <SiteLogo />
        </Link>
        <Menu theme="light" mode="horizontal">
          <Menu.Item onClick={() => history.push(routes.list)}>Lista</Menu.Item>
          <Menu.Item onClick={() => history.push(routes.generateBuild)}>
            Zestaw dla Ciebie
          </Menu.Item>
          <MainLayoutPulledRightMenuItem>
            <UserActions />
          </MainLayoutPulledRightMenuItem>
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
