import { Carousel, Col, Row } from "antd";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import Link from "antd/lib/typography/Link";
import React, { useEffect, useMemo, useState } from "react";
import PresentationLayout from "../../common/layouts/presentationLayout/PresentationLayout";
import { PresentationFooter } from "../../common/layouts/presentationLayout/styles";
import Title from "../../common/text/Title";
import { buildsService } from "../../core/api/builds/buildsService";
import { Build } from "../../core/api/builds/models";
import BuildCard from "../buildCard/BuildCard";
import TagCloud from "../tagCloud/TagCloud";

const Landing: React.FC = () => {
  const screens = useBreakpoint();
  const cardsAmount: number = useMemo(() => {
    console.log(screens);
    if (screens.xl) return 4;
    else return 3;
  }, [screens]);
  const [span, offset] = useMemo(() => {
    if (screens.xl) return [18, 3];
    else return [24, 0];
  }, [screens]);

  const [builds, setBuilds] = useState<Build[] | undefined>();

  useEffect(() => {
    const fetchBuilds = async () => {
      const data = await buildsService.getAll();
      setBuilds(data);
    };
    fetchBuilds();
  }, []);

  return (
    <PresentationLayout>
      <Title size="xxl">W czym pomóc?</Title>
      <Title size="xl">Zaznacz cechy Twojego nowego komputera:</Title>
      <TagCloud />
      <Row>
        <Col span={span} offset={offset}>
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
        </Col>
      </Row>
      <PresentationFooter>
        <Link style={{ textAlign: "center" }}>
          ... lub przejdź do listy wszystkich zestawów
        </Link>
      </PresentationFooter>
    </PresentationLayout>
  );
};

export default Landing;
