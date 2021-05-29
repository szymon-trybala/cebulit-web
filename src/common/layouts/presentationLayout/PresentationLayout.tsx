import { UserOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../../router/routes";
import {
  PresentationContent,
  PresentationContentContainer,
  PresentationHeader,
  StaticLayout,
} from "./styles";

const PresentationLayout: React.FC = ({ children }) => {
  return (
    <StaticLayout>
      <PresentationHeader>
        <Link to={routes.login}>
          <Button
            type="ghost"
            size="large"
            shape="circle"
            icon={<UserOutlined />}
          ></Button>
        </Link>
      </PresentationHeader>
      <PresentationContentContainer>
        <PresentationContent>{children}</PresentationContent>
      </PresentationContentContainer>
    </StaticLayout>
  );
};

export default PresentationLayout;
