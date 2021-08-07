import { RedoOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import FetchingErrorFeedback from "../../common/feedbacks/FetchingErrorFeedback";
import MainLayout from "../../common/layouts/mainLayout/MainLayout";
import Restrict from "../../common/security/Restrict";
import LoadingCardSkeleton from "../../common/skeletons/LoadingCardSkeleton";
import Title from "../../common/text/Title";
import { buildsService } from "../../core/api/builds/buildsService";
import { Build } from "../../core/api/builds/models";
import BuildCard from "../buildCard/BuildCard";
import { GenerateBuildRefreshButtonContainer } from "./styles";

const GenerateBuild: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [build, setBuild] = useState<Build>();

  const fetchGeneratedBuild = async () => {
    setLoading(true);
    try {
      const data = await buildsService.generateBuild();
      setLoading(false);
      setBuild(data);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGeneratedBuild();
  }, []);
  return (
    <MainLayout>
      <Restrict>
        <Row gutter={[16, 16]}>
          <Col span={9}>
            <Title size="xl">
              Ten komputer naszym zdaniem najbardziej pasuje do Twoich upodobań.
            </Title>
          </Col>
          <Col span={6}>
            {loading ? (
              <LoadingCardSkeleton />
            ) : (
              <>
                {build ? (
                  <>
                    <BuildCard build={build} randomImg />
                    <GenerateBuildRefreshButtonContainer>
                      <Button
                        onClick={fetchGeneratedBuild}
                        type="primary"
                        shape="round"
                        block
                        size="large"
                        icon={<RedoOutlined />}
                      >
                        Wygeneruj nowy
                      </Button>
                    </GenerateBuildRefreshButtonContainer>
                  </>
                ) : (
                  <FetchingErrorFeedback feedback="Błąd serwera" />
                )}
              </>
            )}
          </Col>
          <Col span={9}>
            <Title size="xl">
              Jeśli nie jesteś przekonany, po prostu wygeneruj nowy.
            </Title>
          </Col>
        </Row>
      </Restrict>
    </MainLayout>
  );
};

export default GenerateBuild;
