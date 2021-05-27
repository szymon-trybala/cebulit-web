import { Col, Row } from "antd";
import React, { useState } from "react";
import LoadingTagsSkeleton from "../../common/skeletons/LoadingTagsSkeleton";
import { Tag } from "../../core/api/tags/models";
import { tagsService } from "../../core/api/tags/tagsService";
import useFetch from "../../core/hooks/useFetch";
import { CloudTag, TagCloudContainer, TagTitle } from "./styles";

const TagCloud: React.FC = () => {
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const [tags, loading] = useFetch(tagsService.getAll);

  const handleTagsChange = (tag: Tag, checked: boolean) => {
    if (!selectedTags) return;

    const newSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((x) => x !== tag);
    setSelectedTags(newSelectedTags);
  };

  return (
    <Row align="middle" justify="center">
      <Col span={16} offset={4}>
        <TagCloudContainer>
          {loading ? (
            <LoadingTagsSkeleton />
          ) : (
            <>
              {tags &&
                tags.map((x) => (
                  <CloudTag
                    key={x.id}
                    checked={selectedTags.indexOf(x) > -1}
                    onChange={(checked) => handleTagsChange(x, checked)}
                  >
                    <TagTitle checked={selectedTags.indexOf(x) > -1}>
                      {x.name}
                    </TagTitle>
                  </CloudTag>
                ))}
            </>
          )}
        </TagCloudContainer>
      </Col>
      <Col span={4} />
    </Row>
  );
};

export default TagCloud;
