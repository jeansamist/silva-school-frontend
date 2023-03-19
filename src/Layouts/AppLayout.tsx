import React, { FunctionComponent, useState, useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ConfigContext } from "../Contexts/ConfigContext";
import { AuthContext } from "../Contexts/AuthContext";
import { LoadingContext } from "../Contexts/LoadingContext";
import { LoadingLayout } from "./LoadingLayout";

export const AppLayout: FunctionComponent = () => {
  const [authVefied, setauthVefied] = useState(false);
  const loading = useContext(LoadingContext);
  const config = useContext(ConfigContext);
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(auth.user);
    if (config.isLoaded && auth.isLoaded) {
      if (config.isConfig()) {
        loading.setisConfLoading(true);
        if (auth.user === false) {
          if (!authVefied) {
            navigate("/auth/");
            loading.setisAuthLoading(true);
            setauthVefied(true);
          }
        } else if (auth.user !== undefined) {
          if (!authVefied) {
            loading.setisAuthLoading(true);
          }
        }
      } else {
        if (!loading.isConfLoading) {
          navigate("/config/");
          loading.setisConfLoading(true);
        }
        loading.setisAuthLoading(true);
      }
    }
  }, [config, auth, loading, navigate, authVefied]);

  return <div>{loading.isAuthLoading && loading.isConfLoading ? <Outlet /> : <LoadingLayout />}</div>;
};
