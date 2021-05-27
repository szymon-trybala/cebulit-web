import { Col, Row, Skeleton, Space } from "antd";
import React from "react";

const LoadingTagsSkeleton: React.FC = () => {
  return (
    <Row align="middle" justify="center">
      <Col>
        <Space>
          <Skeleton.Button active shape="square" style={{ width: 80 }} />
          <Skeleton.Button active shape="square" style={{ width: 70 }} />
          <Skeleton.Button active shape="square" style={{ width: 100 }} />
          <Skeleton.Button active shape="square" style={{ width: 55 }} />
          <Skeleton.Button active shape="square" style={{ width: 75 }} />
          <Skeleton.Button active shape="square" style={{ width: 90 }} />
        </Space>
      </Col>
    </Row>
  );
};

export default LoadingTagsSkeleton;
