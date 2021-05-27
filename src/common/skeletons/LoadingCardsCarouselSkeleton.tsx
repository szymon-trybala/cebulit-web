import { Card, Carousel, Skeleton } from "antd";
import React from "react";
import { CarouselCard } from "../../features/buildCard/styles";

const LoadingCardsCarouselSkeleton: React.FC = () => {
  return (
    <Carousel slidesToShow={3} dots={false}>
      <CarouselCard>
        <Card.Meta title={<Skeleton active />}></Card.Meta>
      </CarouselCard>
      <CarouselCard>
        <Card.Meta title={<Skeleton active />}></Card.Meta>
      </CarouselCard>
      <CarouselCard>
        <Card.Meta title={<Skeleton active />}></Card.Meta>
      </CarouselCard>
    </Carousel>
  );
};

export default LoadingCardsCarouselSkeleton;
