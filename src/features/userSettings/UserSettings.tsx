import React from "react";
import MainLayout from "../../common/layouts/mainLayout/MainLayout";
import Restrict from "../../common/security/Restrict";
import Title from "../../common/text/Title";
import ChangePassword from "../auth/ChangePassword";
import BuildOrderHistory from "../buildOrderHistory/BuildOrderHistory";
import UserTags from "../userTags/UserTags";
import { SettingsPartContainer, UserSettingsDivider } from "./styles";

const UserSettings: React.FC = () => {
  return (
    <MainLayout>
      <Restrict>
        <>
          <Title size="large">Zmień swoje tagi</Title>
          <UserTags />
          <UserSettingsDivider />
          <Title size="large">Zmień swoje hasło</Title>
          <SettingsPartContainer>
            <ChangePassword />
          </SettingsPartContainer>
          <UserSettingsDivider />
          <Title size="large">Sprawdź historię zamówień</Title>
          <SettingsPartContainer>
            <BuildOrderHistory />
          </SettingsPartContainer>
        </>
      </Restrict>
    </MainLayout>
  );
};

export default UserSettings;
