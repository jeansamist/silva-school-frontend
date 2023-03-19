import { yupResolver } from "@hookform/resolvers/yup";
import { Button, FieldControlled, Alert } from "@silva-school-frontend/ui";
import { FunctionComponent, useContext, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FiHome, FiLock, FiUser } from "react-icons/fi";
import Loading from "react-loading";
import { AuthContext } from "../Contexts/AuthContext";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { LoadingContext } from "../Contexts/LoadingContext";
const schema = yup.object({
  username: yup.string().required(),
  password: yup.string().min(8).required(),
});
export const LoginAuthView: FunctionComponent = () => {
  type FormValues = {
    username: string;
    password: string;
  };
  const loading = useContext(LoadingContext);
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, seterror] = useState<string>();
  const { control, formState, handleSubmit } = useForm<Partial<FormValues>>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  useEffect(() => {
    if (auth.isLoaded) {
      if (auth.user !== undefined && auth.user !== false) {
        navigate("/");
        loading.setisAuthLoading(true);
      }
    }
  }, [auth, loading, navigate]);

  const onSubmit: SubmitHandler<Partial<FormValues>> = async (data) => {
    const response = await auth.login(data);
    if (typeof response !== "boolean") {
      seterror(response.detail);
    }
  };

  return (
    <div className="view view-loginauth">
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="group-fields">
          <FieldControlled control={control} rightIcon={FiUser} name="username" label="Username" />
          <FieldControlled control={control} rightIcon={FiLock} name="password" label="Password" />
        </div>
        <Button type="primary" size="large" disabled={formState ? !formState.isValid || formState.isSubmitting : true}>
          {formState ? (
            formState.isSubmitting ? (
              <div className="loader">
                <Loading width={25} height={25} type="spokes" color="#fff" />
              </div>
            ) : (
              <div className="label">Log in</div>
            )
          ) : (
            <div className="label">Log in</div>
          )}
        </Button>
        {error !== undefined ? (
          <div className="mt-1" style={{ color: "var(--red)", textAlign: "center" }}>
            {error}
          </div>
        ) : (
          ""
        )}
      </form>
    </div>
  );
};
