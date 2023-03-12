import { yupResolver } from "@hookform/resolvers/yup";
import { Button, FieldControlled } from "@silva-school-frontend/ui";
import { FunctionComponent, useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FiHome, FiLock, FiUser } from "react-icons/fi";
import Loading from "react-loading";
import { AuthContext } from "../Contexts/AuthContext";
import * as yup from "yup";
const schema = yup.object({
  username: yup.string().required(),
  password: yup.string().min(8).required(),
});
export const LoginAuthView: FunctionComponent = () => {
  type FormValues = {
    username: string;
    password: string;
  };
  const auth = useContext(AuthContext);
  const { control, formState, handleSubmit } = useForm<Partial<FormValues>>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<Partial<FormValues>> = async (data) => {
    auth.login(data);
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
      </form>
    </div>
  );
};
