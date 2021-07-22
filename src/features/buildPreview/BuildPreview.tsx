import { ShoppingCartOutlined } from "@ant-design/icons";
import { Descriptions, Modal, Image, Row, Col } from "antd";
import Paragraph from "antd/lib/typography/Paragraph";
import React from "react";
import { alert } from "../../common/alerts/alerts";
import {
  Build,
  MotherboardFormFactor,
  StorageInterface,
} from "../../core/api/builds/models";
import { useAppDispatch } from "../../core/store/hooks";
import { setCartBuild } from "../../core/store/slices/cart/cartSlice";
import {
  BuildPreviewAlignedBottomButton,
  BuildPreviewDescriptionContainer,
  BuildPreviewHorizontalRow,
} from "./styles";
interface BuildPreviewProps {
  build: Build;
  visible: boolean;
  onOk: () => any;
  onCancel: () => any;
}

const BuildPreview: React.FC<BuildPreviewProps> = ({
  build,
  visible,
  onCancel,
  onOk,
}) => {
  const dispatch = useAppDispatch();

  const onAddToCartButtonClick = () => {
    dispatch(setCartBuild(build));
    alert.success("Dodano do koszyka");
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
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
              <BuildPreviewDescriptionContainer>
                <Paragraph>
                  <blockquote>{build.description}</blockquote>
                </Paragraph>
              </BuildPreviewDescriptionContainer>

              <BuildPreviewAlignedBottomButton
                size="large"
                onClick={onAddToCartButtonClick}
                type="primary"
                icon={<ShoppingCartOutlined />}
                block
              >
                {build.price} zł
              </BuildPreviewAlignedBottomButton>
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
