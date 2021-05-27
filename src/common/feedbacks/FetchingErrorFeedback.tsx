import { Result } from "antd";
import React from "react";

interface FetchingErrorFeedbackProps {
  feedback: React.ReactNode;
}

const FetchingErrorFeedback: React.FC<FetchingErrorFeedbackProps> = ({
  feedback,
}) => {
  return (
    <Result status="500" title="Błąd serwera" subTitle={feedback}></Result>
  );
};

export default FetchingErrorFeedback;
