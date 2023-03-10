import React, { FunctionComponent, useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ConfigContext } from "../Contexts/ConfigContext";

export const AuthLayout: FunctionComponent = () => {
  const config = useContext(ConfigContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!config.isConfig()) {
      navigate("/config");
    }
  }, [config, navigate]);
  return (
    <main className="auth-view">
      <Outlet />
    </main>
  );
};
