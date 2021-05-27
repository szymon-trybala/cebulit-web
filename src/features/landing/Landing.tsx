import { Carousel, Col, Row } from "antd";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import Link from "antd/lib/typography/Link";
import { Breakpoint } from "antd/lib/_util/responsiveObserve";
import React, { useMemo } from "react";
import FetchingErrorFeedback from "../../common/feedbacks/FetchingErrorFeedback";
import PresentationLayout from "../../common/layouts/presentationLayout/PresentationLayout";
import { PresentationFooter } from "../../common/layouts/presentationLayout/styles";
import LoadingCardsCarouselSkeleton from "../../common/skeletons/LoadingCardsCarouselSkeleton";
import Title from "../../common/text/Title";
import { buildsService } from "../../core/api/builds/buildsService";
import useFetch from "../../core/hooks/useFetch";
import BuildCard from "../buildCard/BuildCard";
import TagCloud from "../tagCloud/TagCloud";

const Landing: React.FC = () => {
  const screens = useBreakpoint();
  const cardsAmount: number = useMemo(() => getCardsAmount(screens), [screens]);
  const [span, offset] = useMemo(() => getCardsSpan(screens), [screens]);
  const [builds, loading, error] = useFetch(buildsService.getAll);

  return (
    <PresentationLayout>
      {error ? (
        <FetchingErrorFeedback
          feedback={
            <Link style={{ textAlign: "center" }}>
              Przejdź do listy wszystkich zestawów
            </Link>
          }
        />
      ) : (
        <>
          <Title size="xxl">W czym pomóc?</Title>
          <Title size="xl">Zaznacz cechy Twojego nowego komputera:</Title>
          <TagCloud />
          <Row>
            <Col span={span} offset={offset}>
              {loading ? (
                <LoadingCardsCarouselSkeleton />
              ) : (
                <Carousel
                  autoplay
                  slidesToShow={cardsAmount}
                  pauseOnHover
                  dots={false}
                >
                  {builds &&
                    builds.length > 0 &&
                    builds.map((x) => (
                      <div>
                        <BuildCard build={x} />
                      </div>
                    ))}
                </Carousel>
              )}
            </Col>
          </Row>
          <PresentationFooter>
            <Link style={{ textAlign: "center" }}>
              ... lub przejdź do listy wszystkich zestawów
            </Link>
          </PresentationFooter>
        </>
      )}
    </PresentationLayout>
  );
};

export default Landing;

function getCardsAmount(screens: Partial<Record<Breakpoint, boolean>>): number {
  if (screens.xs) return 1;
  if (!screens.xxl) return 3;
  else return 4;
}

function getCardsSpan(
  screens: Partial<Record<Breakpoint, boolean>>
): [number, number] {
  if (screens.xl) return [18, 3];
  else return [24, 0];
}
