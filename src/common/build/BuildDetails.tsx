import React from "react";
import { Build, StorageInterface } from "../../core/api/builds/models";

interface BuildDetailsProps {
  build: Build;
}

const BuildDetails: React.FC<BuildDetailsProps> = ({ build }) => {
  return (
    <>
      <div>Procesor: {build.processor.name}</div>
      <div>Płya główna: {build.motherboard.name}</div>
      <div>RAM: {build.memory.capacity} GB</div>
      {build.storage.map((x) => (
        <div>
          {x.capacity} GB {StorageInterface[x.interface]}
        </div>
      ))}
      {build.graphicsCard && (
        <div>Karta graficzna: {build.graphicsCard.name}</div>
      )}
    </>
  );
};

export default BuildDetails;
