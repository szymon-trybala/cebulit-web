import React from "react";
import { useHistory } from "react-router-dom";
import PresentationLayout from "../../common/layouts/presentationLayout/PresentationLayout";
import Title from "../../common/text/Title";
import { routes } from "../../router/routes";
import UserTags from "../userTags/UserTags";
import { UserFirstTagsSelectTagCloudContainer } from "./styles";

const UserTagsSetup: React.FC = () => {
  const history = useHistory();

  const handleTagsSetupComplete = () => {
    history.push(routes.list);
  };

  return (
    <PresentationLayout>
      <Title size="xl">Dzięki że jesteś z nami</Title>
      <Title size="xxl">Co podać?</Title>
      <UserFirstTagsSelectTagCloudContainer>
        <UserTags onTagsUpdate={handleTagsSetupComplete} />
      </UserFirstTagsSelectTagCloudContainer>
    </PresentationLayout>
  );
};

export default UserTagsSetup;
