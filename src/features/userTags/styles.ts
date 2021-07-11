import { CloseOutlined } from "@ant-design/icons";
import { Tag } from "antd";
import styled from "styled-components";

interface TagTitleProps {
  matchLevel: number;
}

export const MatchedTagTitle = styled.span<TagTitleProps>`
  color: ${(props) => "black"};
  font-size: 22px;
`;

export const CloudMatchedTag = styled(Tag)`
  margin: 5px;
  cursor: pointer;
  user-select: none;
`;

export const MatchedTagCloudContainer = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const TagCloudCloseOutlined = styled(CloseOutlined)`
  font-size: 15px;
`;
