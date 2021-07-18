import { Result } from "antd";
import React from "react";

interface EmptyFeedbackProps {
  feedback: React.ReactNode;
}

const EmptyFeedback: React.FC<EmptyFeedbackProps> = ({ feedback }) => {
  return <Result status="404" title="Pusto tu" subTitle={feedback} />;
};

export default EmptyFeedback;
