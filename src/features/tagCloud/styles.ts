import styled from "styled-components";

interface TagTitleProps {
  checked: boolean;
}

export const TagTitle = styled.span<TagTitleProps>`
  color: ${(props) => (props.checked ? "white" : "black")};
  font-size: 18px;
`;
