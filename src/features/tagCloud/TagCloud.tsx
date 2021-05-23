import { Col, Row } from "antd";
import React, { useState } from "react";
import { CloudTag, TagCloudContainer, TagTitle } from "./styles";

const tagsData = [
  "biuro",
  "filmy",
  "cisza",
  "mały rozmiar",
  "programowanie",
  "maszyny wirtualne",
  "esport",
  "edycja wideo",
  "dużo ramu",
  "stacja robocza",
];

const TagCloud: React.FC = () => {
  const [selectedTags, setSelectedTags] = useState(["biuro"]);

  const handleTagsChange = (tag: string, checked: boolean) => {
    const newSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((x) => x !== tag);
    setSelectedTags(newSelectedTags);
  };

  return (
    <Row>
      <Col span={16} offset={4}>
        <TagCloudContainer>
          {tagsData.map((x) => (
            <CloudTag
              key={x}
              checked={selectedTags.indexOf(x) > -1}
              onChange={(checked) => handleTagsChange(x, checked)}
            >
              <TagTitle checked={selectedTags.indexOf(x) > -1}>{x}</TagTitle>
            </CloudTag>
          ))}
        </TagCloudContainer>
      </Col>
    </Row>
  );
};

export default TagCloud;
