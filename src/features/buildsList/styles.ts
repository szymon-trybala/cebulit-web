import { Form, TreeSelect, List } from "antd";
import styled from "styled-components";

export const FiltersTreeSelect = styled(TreeSelect)`
  width: 200px;
`;

export const InlineFormItem = styled(Form.Item)`
  display: inline-block;
  width: calc(50% - 12px);
`;

export const InlineSeparator = styled.span`
  display: inline-block;
  width: 24px;
  line-height: 32px;
  text-align: center;
`;

export const BuildsListContainer = styled.div`
  margin: 0 72px 0 72px;
`;

export const BuildsHorizontalListItem = styled(List.Item)`
  height: 175px;
  cursor: pointer;
`;
