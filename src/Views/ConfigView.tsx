import React, { FunctionComponent } from "react";
import { Paragraph, TextLink } from "@silva-school-frontend/ui";
import { Button } from "@silva-school-frontend/ui";

export const ConfigView: FunctionComponent = () => {
  return (
    <div className="view view-config-index">
      <Paragraph className="mt-1">
        <b>Welcome to </b>
        <TextLink>Silva School</TextLink>
        <br />
        <br />
        We should configure application first
      </Paragraph>
      <Button size="large" className="mt-1" to="firstadmin">
        Go it
      </Button>
    </div>
  );
};
