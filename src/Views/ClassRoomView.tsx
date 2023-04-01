import React, { FunctionComponent, MouseEvent } from "react";
import { ViewHeader } from "../Components/Elements/ViewHeader";
import { Flexbox } from "@silva-school-frontend/ui";
import { Button } from "@silva-school-frontend/ui";
import { useParams } from "react-router-dom";

export const ClassRoomView: FunctionComponent = () => {
  const s = useParams();
  console.log(s);

  function action(e: MouseEvent) {
    return;
  }

  return (
    <div className="view view-classroom">
      <ViewHeader title="ClassRoom" />
      <Flexbox className="view-actions mt-3 mb-3 aic jcsb" gap>
        <Button type="large" onClick={action}>
          Action
        </Button>
      </Flexbox>
      <div className="content">Welcome ClassRoom View</div>
    </div>
  );
};
