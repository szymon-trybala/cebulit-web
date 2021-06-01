import { Descriptions, Modal } from "antd";
import React from "react";
import {
  Build,
  MotherboardFormFactor,
  StorageInterface,
} from "../../core/api/builds/models";

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
  return (
    <Modal
      title={build.name}
      visible={visible}
      onCancel={onCancel}
      onOk={onOk}
      footer={null}
    >
      <Descriptions
        bordered
        column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
      >
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
    </Modal>
  );
};

export default BuildPreview;
