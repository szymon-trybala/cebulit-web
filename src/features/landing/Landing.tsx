import { Carousel } from "antd";
import React, { useEffect, useState } from "react";
import MainLayout from "../../common/mainLayout/MainLayout";
import Title from "../../common/text/Title";
import { buildsService } from "../../core/api/builds/buildsService";
import { Build } from "../../core/api/builds/models";
import BuildCard from "../buildCard/BuildCard";
import TagCloud from "../tagCloud/TagCloud";

const Landing: React.FC = () => {
  const [builds, setBuilds] = useState<Build[] | undefined>();

  useEffect(() => {
    const fetchBuilds = async () => {
      const data = await buildsService.getAll();
      setBuilds(data);
    };
    fetchBuilds();
  }, []);

  return (
    <MainLayout>
      <Title size="huge">Znajdź coś dla siebie</Title>
      <TagCloud />
      <Carousel autoplay slidesToShow={3} pauseOnHover dots={false}>
        {builds &&
          builds.length > 0 &&
          builds.map((x) => (
            <div>
              <BuildCard build={x} />
            </div>
          ))}
      </Carousel>
    </MainLayout>
  );
};

export default Landing;
