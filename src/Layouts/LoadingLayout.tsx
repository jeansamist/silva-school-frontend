import React, { FunctionComponent } from "react";
import Loading from "react-loading";

export const LoadingLayout: FunctionComponent = () => {
  return (
    <h1>
      <Loading type="cylon" color="red" />
    </h1>
  );
};
