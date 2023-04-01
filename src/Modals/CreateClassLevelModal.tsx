import { yupResolver } from "@hookform/resolvers/yup";
import { Button, FieldControlled, Modal } from "@silva-school-frontend/ui";
import { FunctionComponent, useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FiDollarSign, FiHome, FiPercent } from "react-icons/fi";
import Loading from "react-loading";
import * as yup from "yup";
import { AuthContext } from "../Contexts/AuthContext";

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
export const CreateClassLevelModal: FunctionComponent<CreateClassLevelModalProps> = ({
  isVisible = false,
  setter = () => {
    return;
  },
}) => {
  type FormValues = {
    name: string;
    level: number;
    current_price: number;
    new_student_price: number;
  };
  const auth = useContext(AuthContext);
  const [error, seterror] = useState<string>();

  const { control, formState, handleSubmit } = useForm<Partial<FormValues>>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Partial<FormValues>> = async (data) => {
    console.log(data);
    return;
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
        <Button type="primary" size="large" disabled={formState ? !formState.isValid || formState.isSubmitting : true}>
          {formState ? (
            formState.isSubmitting ? (
              <div className="loader">
                <Loading width={25} height={25} type="spokes" color="#fff" />
              </div>
            ) : (
              <div className="label">Create Class Level</div>
            )
          ) : (
            <div className="label">Create Class Level</div>
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
    </Modal>
  );
};
