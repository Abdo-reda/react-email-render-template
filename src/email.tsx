import { Html } from "@react-email/components";
import * as React from "react";

interface EmailComponentProps {}

export const EmailComponent = ({}: EmailComponentProps) => {
  return <Html></Html>;
};

EmailComponent.PreviewProps = {} as EmailComponentProps;

export default EmailComponent;