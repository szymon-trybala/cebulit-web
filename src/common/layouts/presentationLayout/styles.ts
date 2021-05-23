import styled from "styled-components";

export const StaticLayout = styled.div`
  min-height: 360px;
  height: 100vh;
`;

export const PresentationHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 16px 40px 0 40px;
  height: 0px;
`;

export const PresentationContentContainer = styled.div`
  padding: 0 32px 8px 32px;
  margin: 0 64px 16px 32px;
`;

export const PresentationContent = styled.div`
  min-height: 380px;
  padding: 0 32px 0 32px;
  margin: 0 32px 0 32px;
`;

export const PresentationFooter = styled.div`
  padding-top: 16px;
  text-align: center;
`;
