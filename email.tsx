import { Html } from "@react-email/components";
import * as React from "react";

interface EmailComponentProps {
  name: string;
}

export const EmailComponent = (props: EmailComponentProps) => {
  return <Html> Hello, wwww {props.name} </Html>;
};

export default EmailComponent;
export const PreviewProps: EmailComponentProps = {
  name: "React Email"
};