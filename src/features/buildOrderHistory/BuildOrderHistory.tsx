import { List } from "antd";
import React, { useEffect, useState } from "react";
import { alert } from "../../common/alerts/alerts";
import EmptyFeedback from "../../common/feedbacks/EmptyFeedback";
import LoadingListSkeleton from "../../common/skeletons/LoadingListSkeleton";
import { BuildOrder } from "../../core/api/auth/models";
import { userService } from "../../core/api/auth/userService";
import BuildPreview from "../buildPreview/BuildPreview";
import { BuildOrderHistoryListItem } from "./styles";

const BuildOrderHistory: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [orderedBuilds, setOrderedBuilds] = useState<BuildOrder[]>();
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const fetchBuildOrders = async () => {
      try {
        setLoading(true);
        const fetchedOrderedBuilds = await userService.getOrderedBuilds();
        setOrderedBuilds(fetchedOrderedBuilds);
        setLoading(false);
      } catch (error) {
        console.error(`Error while fetching ordered builds: ${error}`);
        alert.error("Nie udało się pobrać listy zamówionych komputerów");
        setLoading(false);
      }
    };
    fetchBuildOrders();
  }, []);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <>
      {loading ? (
        <LoadingListSkeleton />
      ) : (
        <>
          {orderedBuilds &&
            (orderedBuilds.length === 0 ? (
              <EmptyFeedback feedback="Spróbuj coś zamówić" />
            ) : (
              <List
                dataSource={orderedBuilds}
                renderItem={(x) => (
                  <>
                    <BuildOrderHistoryListItem key={x.id} onClick={toggleModal}>
                      <List.Item.Meta
                        title={`${
                          x.build.isGeneratedForUser ? "[Wygenerowany] " : ""
                        }${x.build.name}`}
                      />
                      <div>{x.price} zł</div>
                    </BuildOrderHistoryListItem>
                    <BuildPreview
                      build={x.build}
                      onOk={toggleModal}
                      onCancel={toggleModal}
                      visible={modalVisible}
                    />
                  </>
                )}
              />
            ))}
        </>
      )}
    </>
  );
};

export default BuildOrderHistory;
