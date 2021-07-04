import { Col, List, Row } from "antd";
import React, { useEffect } from "react";
import FetchingErrorFeedback from "../../common/feedbacks/FetchingErrorFeedback";
import NoMatchingBuildsFeedback from "../../common/feedbacks/NoMatchingBuildsFeedback";
import MainLayout from "../../common/layouts/mainLayout/MainLayout";
import Restrict from "../../common/security/Restrict";
import LoadingListSkeleton from "../../common/skeletons/LoadingListSkeleton";
import { buildsService } from "../../core/api/builds/buildsService";
import { useAppDispatch, useAppSelector } from "../../core/store/hooks";
import BuildsListFilters from "./BuildsListFilters";
import BuildsListItem from "./BuildsListItem";
import { BuildsListContainer } from "./styles";

const BuildsList: React.FC = () => {
  const dispatch = useAppDispatch();
  const selectedFilters = useAppSelector((x) => x.filtersSlice.selectedFilters);
  const buildsState = useAppSelector((x) => x.buildsSlice);

  useEffect(() => {
    dispatch(buildsService.getFiltered({ filters: selectedFilters }));
  }, [selectedFilters, dispatch]);

  return (
    <Restrict>
      <MainLayout>
        <Row>
          <Col flex="200px">
            <BuildsListFilters />
          </Col>
          <Col flex="auto">
            <BuildsListContainer>
              {buildsState.promise === "pending" && <LoadingListSkeleton />}
              {buildsState.promise === "error" && (
                <FetchingErrorFeedback feedback={buildsState.error} />
              )}
              {buildsState.promise === "fulfilled" &&
                buildsState.builds?.length === 0 && (
                  <NoMatchingBuildsFeedback feedback="Spróbuj zmienić filtry" />
                )}
              {buildsState.promise === "fulfilled" &&
                buildsState.builds &&
                buildsState.builds.length > 0 && (
                  <List
                    itemLayout="horizontal"
                    dataSource={buildsState.builds}
                    renderItem={(x) => <BuildsListItem build={x} />}
                  />
                )}
            </BuildsListContainer>
          </Col>
        </Row>
      </MainLayout>
    </Restrict>
  );
};

export default BuildsList;
