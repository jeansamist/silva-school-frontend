import React, { FunctionComponent } from "react";
import { Outlet } from "react-router-dom";
import { Card, Heading } from "@silva-school-frontend/ui";
import { Logo } from "../Components/Logo";
export const AuthLayout: FunctionComponent = () => {
  return (
    <main className="auth-view">
      <div className="container">
        <div className="auth-card">
          <div className="flex aic jcc mb-1" style={{ width: "100%" }}>
            <div className="brand" style={{ width: "40%" }}>
              <Logo />
            </div>
          </div>
          <Card heading={<Heading>Authentification</Heading>}>
            <Outlet />
          </Card>
        </div>
      </div>
    </main>
  );
};
