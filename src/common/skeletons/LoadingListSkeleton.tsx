import { List, Skeleton } from "antd";
import React from "react";

const LoadingListSkeleton: React.FC = () => {
  const listData = [1, 2, 3, 4, 5];

  return (
    <List
      itemLayout="horizontal"
      size="large"
      dataSource={listData}
      renderItem={(x) => (
        <List.Item key={x}>
          <List.Item.Meta
            avatar={
              <Skeleton.Image style={{ height: "125px", width: "125px" }} />
            }
            title={<Skeleton active loading />}
          />
        </List.Item>
      )}
    />
  );
};

export default LoadingListSkeleton;
