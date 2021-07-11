import React from "react";
import UserActions from "../../userActions/UserActions";
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
        <UserActions />
      </PresentationHeader>
      <PresentationContentContainer>
        <PresentationContent>{children}</PresentationContent>
      </PresentationContentContainer>
    </StaticLayout>
  );
};

export default PresentationLayout;
