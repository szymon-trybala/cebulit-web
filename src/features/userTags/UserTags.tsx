import { Button, Col, Row, Space, Typography } from "antd";
import React, { useEffect, useState } from "react";
import LoadingTagsSkeleton from "../../common/skeletons/LoadingTagsSkeleton";
import { Tag, TagMatch } from "../../core/api/tags/models";
import { tagsService } from "../../core/api/tags/tagsService";
import { alert } from "../../common/alerts/alerts";
import {
  CloudMatchedTag,
  MatchedTagCloudContainer,
  MatchedTagTitle,
  TagCloudCloseOutlined,
} from "./styles";
import { userService } from "../../core/api/auth/userService";

interface UserTagsProps {
  onTagsUpdate?: () => any;
}

const UserTags: React.FC<UserTagsProps> = ({ onTagsUpdate }) => {
  const [loading, setLoading] = useState(false);
  const [userTagMatches, setUserTagMatches] = useState<TagMatch[]>();

  useEffect(() => {
    const fetchUserTagMatches = async () => {
      try {
        setLoading(true);
        const existingTagMatches = await tagsService.getForUser();
        const allTags = await tagsService.getAll();
        setUserTagMatches(createUserTagsForm(existingTagMatches, allTags));
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchUserTagMatches();
  }, []);

  const handleTagMatchIncrease = (changedTag: TagMatch) => {
    if (!userTagMatches || changedTag.matchLevel > 1.0) return;

    const filtered = userTagMatches.filter(
      (x) => x.tag.id !== changedTag.tag.id
    );
    const tagWithIncrementedMatchLevel: TagMatch = {
      matchLevel: (changedTag.matchLevel += 0.2),
      tag: changedTag.tag,
    };
    setUserTagMatches(
      [...filtered, tagWithIncrementedMatchLevel].sort((a, b) =>
        a.tag.name.localeCompare(b.tag.name)
      )
    );
  };

  const handleTagMatchReset = (tagToReset: TagMatch) => {
    if (!userTagMatches) return;

    const filtered = userTagMatches.filter(
      (x) => x.tag.id !== tagToReset.tag.id
    );
    const resetedTagMatch: TagMatch = {
      matchLevel: 0,
      tag: tagToReset.tag,
    };
    setUserTagMatches(
      [...filtered, resetedTagMatch].sort((a, b) =>
        a.tag.name.localeCompare(b.tag.name)
      )
    );
  };

  const submit = async () => {
    if (!userTagMatches) return;
    try {
      await userService.setTags(userTagMatches.filter((x) => x.matchLevel > 0));
      alert.success("Zmieniono tagi u??ytkownika");
      onTagsUpdate && onTagsUpdate();
    } catch (error) {
      console.error(error);
      alert.error(`${error}`);
    }
  };

  return (
    <Space direction="vertical" size={8}>
      <Row>
        <Col span={12} offset={6}>
          <MatchedTagCloudContainer>
            {loading ? (
              <LoadingTagsSkeleton />
            ) : (
              <>
                {userTagMatches &&
                  userTagMatches.map((x) => (
                    <CloudMatchedTag
                      key={x.tag.id}
                      color={`rgba(172,59,97,${x.matchLevel})`}
                    >
                      <MatchedTagTitle
                        onClick={() => handleTagMatchIncrease(x)}
                        matchLevel={x.matchLevel}
                      >
                        {x.tag.name}
                      </MatchedTagTitle>
                      <TagCloudCloseOutlined
                        onClick={(e) => handleTagMatchReset(x)}
                        style={{ color: "gray" }}
                      />
                    </CloudMatchedTag>
                  ))}
              </>
            )}
          </MatchedTagCloudContainer>
        </Col>
      </Row>

      <Row align="middle" justify="center">
        <Typography.Text disabled>
          Im wi??cej razy zaznaczysz dany tag, tym bardziej b??dziemy bra?? go pod
          uwag??
        </Typography.Text>
      </Row>
      <Row align="middle" justify="center">
        <Button type="primary" size="large" onClick={submit}>
          Zaktualizuj tagi
        </Button>
      </Row>
    </Space>
  );
};

export default UserTags;

function createUserTagsForm(
  currentTagMatches: TagMatch[] | undefined,
  availableTags: Tag[]
) {
  let tagMatches = currentTagMatches || [];
  availableTags.forEach((x) => {
    if (!containsTag(x, tagMatches)) {
      tagMatches.push({
        matchLevel: 0,
        tag: x,
      });
    }
  });

  return tagMatches.sort((a, b) => a.tag.name.localeCompare(b.tag.name));
}

function containsTag(tag: Tag, tagMatches: TagMatch[]) {
  const matchingTag = tagMatches.find((x) => x.tag.id === tag.id);
  return matchingTag !== undefined;
}
