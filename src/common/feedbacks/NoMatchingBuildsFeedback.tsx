import { Result } from "antd";
import React from "react";

interface FetchingErrorFeedbackProps {
  feedback: React.ReactNode;
}

const NoMatchingBuildsFeedback: React.FC<FetchingErrorFeedbackProps> = ({
  feedback,
}) => {
  return (
    <Result status="404" title="Pusto tu" subTitle={feedback}></Result>
  );
};

export default NoMatchingBuildsFeedback;
