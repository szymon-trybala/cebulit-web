import { UserOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
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
        <Button
          type="ghost"
          size="large"
          shape="circle"
          icon={<UserOutlined />}
        ></Button>
      </PresentationHeader>
      <PresentationContentContainer>
        <PresentationContent>{children}</PresentationContent>
      </PresentationContentContainer>
    </StaticLayout>
  );
};

export default PresentationLayout;
