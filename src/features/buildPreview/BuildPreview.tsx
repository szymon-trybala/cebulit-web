import { ShoppingCartOutlined } from "@ant-design/icons";
import { Descriptions, Modal, Image, Row, Col } from "antd";
import Paragraph from "antd/lib/typography/Paragraph";
import React from "react";
import { useHistory } from "react-router-dom";
import { alert } from "../../common/alerts/alerts";
import {
  Build,
  MotherboardFormFactor,
  StorageInterface,
} from "../../core/api/builds/models";
import { useAppDispatch, useAppSelector } from "../../core/store/hooks";
import { setCartBuild } from "../../core/store/slices/cart/cartSlice";
import { routes } from "../../router/routes";
import {
  BuildPreviewAlignedBottomButton,
  BuildPreviewDescriptionContainer,
  BuildPreviewHorizontalRow,
} from "./styles";
interface BuildPreviewProps {
  build: Build;
  visible: boolean;
  randomImg?: boolean;
  onOk: () => any;
  onCancel: () => any;
}

const BuildPreview: React.FC<BuildPreviewProps> = ({
  build,
  visible,
  randomImg,
  onCancel,
  onOk,
}) => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const loggedIn = useAppSelector((x) => x.authSlice.user !== undefined);

  const onAddToCartButtonClick = () => {
    dispatch(setCartBuild(build));
    alert.success("Dodano do koszyka");
  };

  const onLoginButtonClick = () => {
    history.push(routes.login);
  };

  return (
    <Modal
      title={build.name}
      visible={visible}
      onCancel={onCancel}
      onOk={onOk}
      footer={null}
      width="800px"
      centered
    >
      <>
        <Row gutter={[16, 0]}>
          <Col md={10}>
            <BuildPreviewHorizontalRow>
              <Image
                preview={false}
                src={
                  randomImg
                    ? "https://upload.wikimedia.org/wikipedia/commons/4/46/Question_mark_%28black%29.svg"
                    : build.photoUrl
                }
                fallback="https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"
              />
              <BuildPreviewDescriptionContainer>
                <Paragraph>
                  <blockquote>{build.description}</blockquote>
                </Paragraph>
              </BuildPreviewDescriptionContainer>

              {loggedIn ? (
                <BuildPreviewAlignedBottomButton
                  size="large"
                  onClick={onAddToCartButtonClick}
                  type="primary"
                  icon={<ShoppingCartOutlined />}
                  block
                >
                  {build.price} zł
                </BuildPreviewAlignedBottomButton>
              ) : (
                <BuildPreviewAlignedBottomButton
                  onClick={onLoginButtonClick}
                  size="large"
                  block
                >
                  Zaloguj się aby dodać do koszyka
                </BuildPreviewAlignedBottomButton>
              )}
            </BuildPreviewHorizontalRow>
          </Col>
          <Col md={14}>
            <Descriptions bordered>
              <Descriptions.Item span={3} label="Procesor">
                {build.processor.name}
                <br />
                {build.processor.baseClock}-{build.processor.boostClock} GHz
              </Descriptions.Item>
              <Descriptions.Item span={3} label="Płyta główna">
                {build.motherboard.name}
                <br />
                {MotherboardFormFactor[build.motherboard.formFactor]}
                <br />
                Socket {build.motherboard.socket}
                <br />
                Sloty na RAM: {build.motherboard.memorySlots}
              </Descriptions.Item>
              <Descriptions.Item span={3} label="RAM">
                {build.memory.name} {build.memory.capacity} GB
                <br />
                {build.memory.speed} MHZ CL{build.memory.latency}
                <br />
                Moduły: {build.memory.modules}
              </Descriptions.Item>
              {build.graphicsCard && (
                <Descriptions.Item span={3} label="GPU">
                  {build.graphicsCard.name}
                </Descriptions.Item>
              )}
              <Descriptions.Item
                span={3}
                label={build.storage.length > 1 ? "Dyski" : "Dysk"}
              >
                {build.storage.map((d) => (
                  <>
                    {d.name} {d.capacity} GB, {StorageInterface[d.interface]}
                    <br />
                  </>
                ))}
              </Descriptions.Item>
              <Descriptions.Item span={3} label="Zasilacz">
                {build.powerSupply.name}
                <br />
                {build.powerSupply.power} W
              </Descriptions.Item>
              <Descriptions.Item span={3} label="Obudowa">
                {build.case.name}
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>
      </>
    </Modal>
  );
};

export default BuildPreview;
