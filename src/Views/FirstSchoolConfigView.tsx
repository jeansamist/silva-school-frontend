import React, { FunctionComponent, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ConfigContext } from "../Contexts/ConfigContext";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { School } from "@silva-school-frontend/models";
import { SubmitHandler, useForm } from "react-hook-form";
import { Paragraph, FieldControlled, Button } from "@silva-school-frontend/ui";
import { FiMapPin, FiHome } from "react-icons/fi";
import Loading from "react-loading";
import { LoadingContext } from "../Contexts/LoadingContext";
const schema = yup.object({
  name: yup.string().required(),
  location: yup.string().required(),
});
export const FirstSchoolConfigView: FunctionComponent = () => {
  type FormValues = School;
  const navigate = useNavigate();
  const { control, formState, handleSubmit } = useForm<Partial<FormValues>>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const config = useContext(ConfigContext);

  const onSubmit: SubmitHandler<Partial<FormValues>> = async (data: School) => {
    data.image_url = "default.png";
    data.classes = [];
    data.users = [];
    config.configSchool(data);
  };
  const loading = useContext(LoadingContext);

  useEffect(() => {
    if (config.isLoaded) {
      if (config.schoolExist) {
        navigate("/");
      } else if (!config.configAdmin) {
        navigate("/config/firstadmin");
      }
    }
  }, [config, loading, navigate]);

  return (
    <div className="view view-firstschoolconfig">
      <Paragraph className="mt-1">
        There are no <b>Schools</b> in the database yet.
      </Paragraph>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="group-fields">
          <FieldControlled control={control} rightIcon={FiHome} name="name" label="School Name" />
          <FieldControlled control={control} rightIcon={FiMapPin} name="location" label="Location" />
        </div>
        <Button type="primary" size="large" disabled={formState ? !formState.isValid || formState.isSubmitting : true}>
          {formState ? (
            formState.isSubmitting ? (
              <div className="loader">
                <Loading width={25} height={25} type="spokes" color="#fff" />
              </div>
            ) : (
              <div className="label">Start App</div>
            )
          ) : (
            <div className="label">Start App</div>
          )}
        </Button>
      </form>
    </div>
  );
};
