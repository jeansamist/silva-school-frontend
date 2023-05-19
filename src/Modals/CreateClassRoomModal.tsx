import { yupResolver } from "@hookform/resolvers/yup";
import { ClassRoom } from "@silva-school-frontend/models";
import { Button, FieldControlled, Modal } from "@silva-school-frontend/ui";
import { FunctionComponent, useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FiHome } from "react-icons/fi";
import Loading from "react-loading";
import { ApiContext } from "../Contexts/ApiContext";

import * as yup from "yup";

export type CreateClassRoomModalProps = {
  isVisible?: boolean;
  setter?: (status: boolean) => void;
  class_level_id?: number;
};

const schema = yup.object({
  name: yup.string().required(),
});

export const CreateClassRoomModal: FunctionComponent<CreateClassRoomModalProps> = ({
  isVisible = false,
  setter = () => {
    return;
  },
  class_level_id,
}) => {
  type FormValues = ClassRoom;

  const { api } = useContext(ApiContext);

  const { control, formState, handleSubmit } = useForm<Partial<FormValues>>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Partial<FormValues>> = async (data) => {
    api
      .post("/class/" + class_level_id + "/classroom", data)
      .then((response) => {
        setter(false);
      })
      .catch(console.log);
  };

  return (
    <Modal title="Create new Class Level" isVisible={isVisible} onClose={setter}>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="group-fields">
          <FieldControlled control={control} rightIcon={FiHome} name="name" label="Classroom Name" />
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
      </form>
    </Modal>
  );
};
