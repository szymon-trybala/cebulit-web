import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import LoadingTagsSkeleton from "../../common/skeletons/LoadingTagsSkeleton";
import { Tag } from "../../core/api/tags/models";
import { tagsService } from "../../core/api/tags/tagsService";
import { CloudTag, TagCloudContainer, TagTitle } from "./styles";

interface TagCloudProps {
  selectedTags: Tag[];
  onSelectedTagsChange: (newSelectedTags: Tag[]) => any;
}

const TagCloud: React.FC<TagCloudProps> = ({
  selectedTags,
  onSelectedTagsChange,
}) => {
  const [loading, setLoading] = useState(false);
  const [tags, setTags] = useState<Tag[]>();

  useEffect(() => {
    const fetchTags = async () => {
      setLoading(true);
      try {
        const data = await tagsService.getAll();
        setLoading(false);
        setTags(data);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchTags();
  }, []);

  const handleTagsChange = (tag: Tag, checked: boolean) => {
    if (!selectedTags) return;

    const newSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((x) => x !== tag);
    onSelectedTagsChange(newSelectedTags);
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
