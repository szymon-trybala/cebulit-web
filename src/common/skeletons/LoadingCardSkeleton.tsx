import { Card, Skeleton } from "antd";
import React from "react";
import { CarouselCard } from "../../features/buildCard/styles";

const LoadingCardSkeleton: React.FC = () => {
  return (
    <CarouselCard>
      <Card.Meta title={<Skeleton active />}></Card.Meta>
    </CarouselCard>
  );
};

export default LoadingCardSkeleton;
