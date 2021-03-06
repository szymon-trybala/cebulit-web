import styled from "styled-components";
import { Layout } from "antd";

export const SiteLayout = styled(Layout)`
  min-height: 100vh;
`;

export const SiteLogo = styled.div`
  float: left;
  margin-top: 16px;
  height: 32px;
  width: 96px;
  background: rgba(172, 59, 100, 0.9);
`;

export const SiteHeader = styled(Layout.Header)`
  background: #fff;
  position: fixed;
  z-index: 1;
  width: 100%;
`;

export const SiteContentContainer = styled(Layout.Content)`
  padding: 0 50px;
  margin: 96px 32px 0;
  background: #fff;
`;

export const SiteContent = styled.div`
  background: #fff;
  min-height: 380px;
  padding: 24px;
  margin: 8px;
`;

export const SiteFooter = styled(Layout.Footer)`
  text-align: center;
  margin: 0;
`;

export const MainLayoutPulledRightMenuItem = styled.span`
  float: right;
`;
