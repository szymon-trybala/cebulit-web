import { Col, List, Row } from "antd";
import React, { useEffect } from "react";
import EmptyFeedback from "../../common/feedbacks/EmptyFeedback";
import FetchingErrorFeedback from "../../common/feedbacks/FetchingErrorFeedback";
import MainLayout from "../../common/layouts/mainLayout/MainLayout";
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
  const userState = useAppSelector((x) => x.authSlice.user);

  useEffect(() => {
    dispatch(
      buildsService.getFiltered({
        filters: selectedFilters,
        userSpecific: userState !== undefined,
      })
    );
  }, [selectedFilters, dispatch, userState]);

  return (
    <MainLayout>
      <Row>
        <Col flex="250px">
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
                <EmptyFeedback feedback="Spróbuj zmienić filtry" />
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
  );
};

export default BuildsList;
