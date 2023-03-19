import React, { FunctionComponent, useEffect, useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ConfigContext } from "../Contexts/ConfigContext";
import { Card, Heading } from "@silva-school-frontend/ui";
import { Logo } from "../Components/Logo";
import { LoadingContext } from "../Contexts/LoadingContext";
export const ConfigLayout: FunctionComponent = () => {
  return (
    <main className="config-view">
      <div className="container">
        <div className="config-card">
          <div className="flex aic jcc mb-1" style={{ width: "100%" }}>
            <div className="brand" style={{ width: "40%" }}>
              <Logo />
            </div>
          </div>
          <Card heading={<Heading>App Configuration</Heading>}>
            <Outlet />
          </Card>
        </div>
      </div>
    </main>
  );
};
