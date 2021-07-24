import { Carousel } from "antd";
import React from "react";
import LoadingCardSkeleton from "./LoadingCardSkeleton";

interface LoadingCardsCarouselSkeletonProps {
  slidesToShow: number;
}

const LoadingCardsCarouselSkeleton: React.FC<LoadingCardsCarouselSkeletonProps> =
  ({ slidesToShow }) => {
    return (
      <Carousel slidesToShow={3} dots={false}>
        {[...Array(slidesToShow).map((e, i) => <LoadingCardSkeleton />)]}
      </Carousel>
    );
  };

export default LoadingCardsCarouselSkeleton;
