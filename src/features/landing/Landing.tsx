import { Carousel, Col, Row } from "antd";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import { Breakpoint } from "antd/lib/_util/responsiveObserve";
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import FetchingErrorFeedback from "../../common/feedbacks/FetchingErrorFeedback";
import NoMatchingBuildsFeedback from "../../common/feedbacks/NoMatchingBuildsFeedback";
import PresentationLayout from "../../common/layouts/presentationLayout/PresentationLayout";
import { PresentationFooter } from "../../common/layouts/presentationLayout/styles";
import LoadingCardsCarouselSkeleton from "../../common/skeletons/LoadingCardsCarouselSkeleton";
import Title from "../../common/text/Title";
import { buildsService } from "../../core/api/builds/buildsService";
import { Build } from "../../core/api/builds/models";
import { Tag } from "../../core/api/tags/models";
import { routes } from "../../router/routes";
import BuildCard from "../buildCard/BuildCard";
import TagCloud from "../tagCloud/TagCloud";

const Landing: React.FC = () => {
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

  const [loading, setLoading] = useState(false);
  const [builds, setBuilds] = useState<Build[]>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    const fetchBuilds = async () => {
      setLoading(true);
      try {
        const data = await buildsService.getTagMatched({
          tags: selectedTags.map((x) => x.name),
        });
        setLoading(false);
        setBuilds(data);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchBuilds();
  }, [selectedTags]);

  const screens = useBreakpoint();
  const cardsAmount: number = useMemo(
    () => getCardsAmount(screens, builds?.length || 0),
    [screens, builds]
  );
  const [span, offset] = useMemo(
    () => getCardsSpan(screens, builds?.length || 0),
    [screens, builds]
  );

  const handleTagsChange = (newTags: Tag[]) => {
    if (newTags.length > 0) {
      setSelectedTags(newTags);
    }
  };

  return (
    <PresentationLayout>
      {error ? (
        <FetchingErrorFeedback
          feedback={
            <Link to={routes.list} style={{ textAlign: "center" }}>
              Przejdź do listy wszystkich zestawów
            </Link>
          }
        />
      ) : (
        <>
          <Title size="xxl">W czym pomóc?</Title>
          <Title size="xl">Zaznacz cechy Twojego nowego komputera:</Title>
          <TagCloud
            selectedTags={selectedTags}
            onSelectedTagsChange={handleTagsChange}
          />
          <Row>
            <Col span={span} offset={offset}>
              {loading ? (
                <LoadingCardsCarouselSkeleton />
              ) : (
                <>
                  {builds &&
                    (builds.length === 0 ? (
                      <NoMatchingBuildsFeedback feedback="Spróbuj odznaczyć część filtrów" />
                    ) : (
                      <Carousel
                        autoplay
                        slidesToShow={cardsAmount}
                        pauseOnHover
                        dots={false}
                      >
                        {builds.map((x) => (
                          <div>
                            <BuildCard key={x.id} build={x} />
                          </div>
                        ))}
                      </Carousel>
                    ))}
                </>
              )}
            </Col>
            <Col span={offset} />
          </Row>
          <PresentationFooter>
            <Link
              to={routes.list}
              style={{ textAlign: "center", cursor: "pointer" }}
            >
              ... lub przejdź do listy wszystkich zestawów
            </Link>
          </PresentationFooter>
        </>
      )}
    </PresentationLayout>
  );
};

export default Landing;

function getCardsAmount(
  screens: Partial<Record<Breakpoint, boolean>>,
  maxCards: number
): number {
  if (maxCards === 1) return 1;
  if (maxCards === 2) return 2;

  if (screens.xs) return 1;
  if (!screens.xxl) return 3;
  else return 4;
}

function getCardsSpan(
  screens: Partial<Record<Breakpoint, boolean>>,
  maxCards: number
): [number, number] {
  if (maxCards === 1) return [8, 8];
  if (maxCards === 2) return [12, 6];

  if (screens.xl) return [18, 3];
  else return [24, 0];
}
