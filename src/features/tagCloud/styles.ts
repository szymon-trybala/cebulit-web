import CheckableTag from "antd/lib/tag/CheckableTag";
import styled from "styled-components";

interface TagTitleProps {
  checked: boolean;
}

export const TagTitle = styled.span<TagTitleProps>`
  color: ${(props) => (props.checked ? "white" : "black")};
  font-size: 22px;
`;

export const CloudTag = styled(CheckableTag)`
  margin: 5px;
`;

export const TagCloudContainer = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
`;
