import { yupResolver } from "@hookform/resolvers/yup";
import { Button, FieldControlled, Modal } from "@silva-school-frontend/ui";
import { FunctionComponent, useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FiDollarSign, FiHome, FiPercent } from "react-icons/fi";
import Loading from "react-loading";
import * as yup from "yup";
import { AuthContext } from "../Contexts/AuthContext";
import { ApiContext } from "../Contexts/ApiContext";
import { ClassLevel } from "@silva-school-frontend/models";
import { AxiosError } from "axios";
import { SubmitButton } from "../Components/SubmitButton";

export type CreateClassLevelModalProps = {
  isVisible?: boolean;
  setter?: (status: boolean) => void;
};

const schema = yup.object({
  name: yup.string().required(),
  level: yup.number().min(0).required(),
  current_price: yup.number().min(1).max(2147483647).required(),
  new_student_price: yup.number().min(1).max(2147483647).required(),
});

// Component
export const CreateClassLevelModal: FunctionComponent<CreateClassLevelModalProps> = ({
  isVisible = false,
  setter = () => {
    return;
  },
}) => {
  type FormValues = ClassLevel;
  type CreateClassLevelError = {
    level: string[];
  };
  const auth = useContext(AuthContext);
  const { api } = useContext(ApiContext);
  const [error, seterror] = useState<CreateClassLevelError>();

  const { control, formState, handleSubmit } = useForm<Partial<FormValues>>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Partial<FormValues>> = async (data) => {
    data.school = auth.current_school?.id;
    data.subjects = [];
    api
      .post("/class", data)
      .then((response) => {
        setter(false);
      })
      .catch((reason_) => {
        const reason = reason_ as AxiosError;
        const err = reason.response?.data as CreateClassLevelError;
        seterror(err);
      });
  };

  return (
    <Modal title="Create new Class Level" isVisible={isVisible} onClose={setter}>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="group-fields">
          <FieldControlled control={control} rightIcon={FiHome} name="name" label="Class Level Name" />
          <FieldControlled control={control} rightIcon={FiPercent} name="level" type="number" label="Class Level" />
          <FieldControlled
            control={control}
            rightIcon={FiDollarSign}
            name="new_student_price"
            type="number"
            label="Class Level Price For New Student"
          />
          <FieldControlled control={control} rightIcon={FiDollarSign} name="current_price" type="number" label="Class Level Current Price" />
        </div>
        <SubmitButton formState={formState}>Create Class Level</SubmitButton>
        {error !== undefined ? (
          <div className="mt-1" style={{ color: "var(--red)", textAlign: "center" }}>
            {error.level.map((err) => err)}
          </div>
        ) : (
          ""
        )}
      </form>
    </Modal>
  );
};
