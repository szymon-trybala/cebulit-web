import { Col, Row } from "antd";
import CheckableTag from "antd/lib/tag/CheckableTag";
import React, { useState } from "react";
import { TagTitle } from "./styles";

const tagsData = [
  "Office",
  "Movies",
  "Quiet",
  "Small",
  "Programming",
  "Virtual Machines",
  "Gaming",
  "Video editing",
  "Lots of ram",
  "Workstation",
];

const TagCloud: React.FC = () => {
  const [selectedTags, setSelectedTags] = useState(["Office"]);

  const handleTagsChange = (tag: string, checked: boolean) => {
    const newSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((x) => x !== tag);
    setSelectedTags(newSelectedTags);
  };

  return (
    <Row>
      <Col span={8} offset={8}>
        {tagsData.map((x) => (
          <CheckableTag
            key={x}
            checked={selectedTags.indexOf(x) > -1}
            onChange={(checked) => handleTagsChange(x, checked)}
          >
            <TagTitle checked={selectedTags.indexOf(x) > -1}>{x}</TagTitle>
          </CheckableTag>
        ))}
      </Col>
    </Row>
  );
};

export default TagCloud;
