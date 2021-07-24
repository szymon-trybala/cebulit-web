import { Skeleton } from "antd";
import React from "react";

const LoadingTagsSkeleton: React.FC = () => {
  return (
    <>
      <Skeleton.Button active shape="square" style={{ width: 120 }} />
      <Skeleton.Button active shape="square" style={{ width: 140 }} />
      <Skeleton.Button active shape="square" style={{ width: 165 }} />
      <Skeleton.Button active shape="square" style={{ width: 140 }} />
      <Skeleton.Button active shape="square" style={{ width: 100 }} />
      <Skeleton.Button active shape="square" style={{ width: 110 }} />
    </>
  );
};

export default LoadingTagsSkeleton;
