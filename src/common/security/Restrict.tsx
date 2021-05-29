import React from "react";
import { useAppSelector } from "../../core/store/hooks";
import UnauthorizedFeedback from "../feedbacks/UnauthorizedFeedback";

interface RestrictProps {
  children: React.ReactElement;
}

const Restrict: React.FC<RestrictProps> = ({ children }) => {
  const auth = useAppSelector((s) => s.authSlice);

  if (auth.user) return children;

  return <UnauthorizedFeedback />;
};

export default Restrict;
