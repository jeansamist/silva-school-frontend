import React, { FunctionComponent, useEffect, useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ConfigContext } from "../Contexts/ConfigContext";
import { Card, Heading } from "@silva-school-frontend/ui";
import { Logo } from "../Components/Logo";
export const ConfigLayout: FunctionComponent = () => {
  const config = useContext(ConfigContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (config.isConfig()) {
      navigate("/");
    }
  }, [config, navigate]);
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
