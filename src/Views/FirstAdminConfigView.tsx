import { yupResolver } from "@hookform/resolvers/yup";
import { User } from "@silva-school-frontend/models";
import { Button, FieldControlled, Flexbox, Heading, Paragraph, Radio } from "@silva-school-frontend/ui";
import dayjs from "dayjs";
import { FunctionComponent, useContext, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FiCalendar, FiLock, FiMail, FiMapPin, FiPhone, FiUser } from "react-icons/fi";
import Loading from "react-loading";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { ConfigContext } from "../Contexts/ConfigContext";
import { LoadingContext } from "../Contexts/LoadingContext";
const schema = yup.object({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  address: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.number().required(),
  birthdate: yup.date().max(new Date(), "birthdate field must be at earlier than to day").required(),
  username: yup.string().required(),
  password: yup.string().min(8).required(),
});

export const FirstAdminConfigView: FunctionComponent = () => {
  type FormValues = User;
  const navigate = useNavigate();
  const [sex, setsex] = useState("M");
  const { control, formState, handleSubmit } = useForm<Partial<FormValues>>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Partial<FormValues>> = async (data: User) => {
    data.birthdate = dayjs(data.birthdate).format("YYYY-MM-DD");
    data.sex = sex;
    config.configAdmin(data);
  };
  const config = useContext(ConfigContext);
  const loading = useContext(LoadingContext);

  useEffect(() => {
    if (config.isLoaded) {
      if (config.adminExist) {
        navigate("/config/firstschool/");
      }
    }
  }, [config, loading, navigate]);
  return (
    <div className="view view-firstadminconfig">
      <Paragraph className="mt-1">
        There are no <b>admin users</b> in the database yet.
      </Paragraph>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="group-fields">
          <FieldControlled control={control} rightIcon={FiUser} name="first_name" label="First Name" />
          <FieldControlled control={control} rightIcon={FiUser} name="last_name" label="Last Name" />
          <FieldControlled control={control} rightIcon={FiMapPin} name="address" label="Adsress" />
          <FieldControlled control={control} rightIcon={FiCalendar} name="birthdate" label="Birthdate" type="date" />
          <FieldControlled control={control} rightIcon={FiMail} name="email" label="E-mail" />
          <FieldControlled control={control} rightIcon={FiPhone} type="tel" name="phone" label="Phone" />
          <FieldControlled control={control} rightIcon={FiUser} name="username" label="Username" />
          <FieldControlled control={control} rightIcon={FiLock} type="password" name="password" label="Password" />
          <div>
            <b>Sex</b>
            <Flexbox className="aic" gap>
              <Flexbox className="aic lh-0">
                <Radio name="sex" onClick={setsex} value="M" />
                <Heading type="4">M</Heading>
              </Flexbox>
              <Flexbox className="aic lh-0">
                <Radio name="sex" onClick={setsex} value="F" />
                <Heading type="4">F</Heading>
              </Flexbox>
            </Flexbox>
          </div>
        </div>
        <Button type="primary" size="large" disabled={formState ? !formState.isValid || formState.isSubmitting : true}>
          {formState ? (
            formState.isSubmitting ? (
              <div className="loader">
                <Loading width={25} height={25} type="spokes" color="#fff" />
              </div>
            ) : (
              <div className="label">Continue</div>
            )
          ) : (
            <div className="label">Continue</div>
          )}
        </Button>
      </form>
    </div>
  );
};
