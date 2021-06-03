import { Col, Row } from "antd";
import React from "react";
import MainLayout from "../../common/layouts/mainLayout/MainLayout";
import Restrict from "../../common/security/Restrict";
import BuildsListFilters from "./BuildsListFilters";

const BuildsList: React.FC = () => {
  return (
    <Restrict>
      <MainLayout>
        <Row>
          <Col flex="200px">
            <BuildsListFilters />
          </Col>
          <Col flex="auto">Content</Col>
        </Row>
      </MainLayout>
    </Restrict>
  );
};

export default BuildsList;
