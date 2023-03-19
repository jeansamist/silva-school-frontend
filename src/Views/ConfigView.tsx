import React, { FunctionComponent, useContext } from "react";
import { Paragraph, TextLink } from "@silva-school-frontend/ui";
import { Button } from "@silva-school-frontend/ui";
import { ConfigContext } from "../Contexts/ConfigContext";

export const ConfigView: FunctionComponent = () => {
  const config = useContext(ConfigContext);
  return (
    <div className="view view-config-index">
      <Paragraph className="mt-1">
        <b>Welcome to </b>
        <TextLink>Silva School</TextLink>
        <br />
        <br />
        We should configure application first
      </Paragraph>
      <Button size="large" className="mt-1" to={config.isLoaded ? (!config.adminExist ? "firstadmin" : "firstschool") : "/"}>
        Go it
      </Button>
    </div>
  );
};
