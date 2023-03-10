import React, { FunctionComponent, MouseEvent, useContext, useEffect } from "react";
import { Flexbox } from "@silva-school-frontend/ui";
import { Button } from "@silva-school-frontend/ui";
import { useNavigate } from "react-router-dom";
import { ConfigContext } from "../Contexts/ConfigContext";

export const FirstSchoolConfigView: FunctionComponent = () => {
  function action(e: MouseEvent) {
    return;
  }

  const navigate = useNavigate();
  const config = useContext(ConfigContext);

  useEffect(() => {
    if (!config.isConfig()) {
      if (!config.adminExist) {
        navigate("../firstadmin");
      }
    } else {
      navigate("/");
    }
  }, [config, navigate]);
  return (
    <div className="view view-firstschoolconfig">
      <Flexbox className="view-actions mt-3 mb-3 aic jcsb" gap>
        <Button type="large" onClick={action}>
          Action
        </Button>
      </Flexbox>
      <div className="content">Welcome FirstSchoolConfig View</div>
    </div>
  );
};
