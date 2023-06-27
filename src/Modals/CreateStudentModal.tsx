import { yupResolver } from "@hookform/resolvers/yup";
import { Student } from "@silva-school-frontend/models";
import { Avatar, FieldControlled, Flexbox, Grid, Heading, Modal, Radio, Select } from "@silva-school-frontend/ui";
import { AxiosError } from "axios";
import dayjs from "dayjs";
import { FunctionComponent, useContext, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FiCalendar, FiMail, FiMapPin, FiPhone, FiUser } from "react-icons/fi";
import * as yup from "yup";
import { SubmitButton } from "../Components/SubmitButton";
import { ApiContext } from "../Contexts/ApiContext";
import male from "./../assets/images/M.png";
import female from "./../assets/images/F.png";
import { FaFemale, FaMale } from "react-icons/fa";
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { useDropzone } from "react-dropzone";

export type CreateStudentModalProps = {
  isVisible?: boolean;
  setter?: (status: boolean) => void;
  classroom_id: number;
};

const schema = yup.object({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  address: yup.string().required(),
  email: yup.string().email(),
  phone: yup.number().required(),
  birthdate: yup.date().max(new Date(), "birthdate field must be at earlier than to day").required(),
});

// Component
export const CreateStudentModal: FunctionComponent<CreateStudentModalProps> = ({
  isVisible = false,
  setter = () => {
    return;
  },
  classroom_id,
}) => {
  type FormValues = Student;
  type CreateClassLevelError = {
    level: string[];
  };
  const { api } = useContext(ApiContext);
  const [sex, setsex] = useState("M");
  const [error, seterror] = useState<CreateClassLevelError>();
  const { control, formState, handleSubmit } = useForm<Partial<FormValues>>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const [avatarImage, setavatarImage] = useState<any>();
  const [avatarFile, setavatarFile] = useState<File>();
  const { getRootProps } = useDropzone({
    accept: { "image/*": [".png", ".jpg", ".jpeg"] },
    multiple: false,
    maxSize: 5242880,
    onDrop: (acceptedFiles: File[]) => {
      setavatarFile(acceptedFiles[0]);
    },
  });
  useEffect(() => {
    setavatarFile(undefined);
  }, [isVisible]);

  useEffect(() => {
    if (avatarFile) {
      const reader = new FileReader();
      reader.onload = () => {
        setavatarImage(reader.result);
      };
      reader.readAsDataURL(avatarFile);
    }
  }, [avatarFile]);

  const onSubmit: SubmitHandler<Partial<FormValues>> = async (data) => {
    const formdata = new FormData();
    data.birthdate = dayjs(data.birthdate).format("YYYY-MM-DD");
    data.sex = sex;
    data.classroom = classroom_id;
    if (avatarFile !== undefined) data.avatar = avatarFile;
    for (const key in data) {
      const e = data as any;
      const el = e[key];
      formdata.append(key, el);
    }
    api
      .post("/student", formdata)
      .then(() => {
        setter(false);
      })
      .catch((reason_) => {
        const reason = reason_ as AxiosError;
        const err = reason.response?.data as CreateClassLevelError;
        seterror(err);
      });
  };

  return (
    <Modal title="Create new Student" isVisible={isVisible} onClose={setter}>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="group-fields">
          <Flexbox className="aic" gap>
            <div {...getRootProps()} className="student-avatar" style={{ cursor: "pointer" }}>
              {/* <input {...getInputProps} /> */}
              <Avatar size="large" image={avatarFile ? avatarImage : sex === "M" ? male : female} />
            </div>
            <div className="group-fields" style={{ margin: 0, width: "100%" }}>
              <FieldControlled control={control} rightIcon={FiUser} name="first_name" label="First Name" />
              <FieldControlled control={control} rightIcon={FiUser} name="last_name" label="Last Name" />
            </div>
          </Flexbox>
          <Grid columns={2}>
            <Select
              label="Sex"
              onChange={({ value }) => {
                setsex(value);
              }}
              options={[
                {
                  label: (
                    <div className="flex aic flex-gap">
                      <FaMale className="flex lh-0" /> Male
                    </div>
                  ),
                  value: "M",
                },
                {
                  label: (
                    <div className="flex aic flex-gap">
                      <FaFemale className="flex lh-0" /> Female
                    </div>
                  ),
                  value: "F",
                },
              ]}
            />
            <FieldControlled control={control} rightIcon={FiCalendar} name="birthdate" label="Birthdate" type="date" />
          </Grid>
          <FieldControlled control={control} rightIcon={FiMapPin} name="address" label="Adsress" />
          <FieldControlled control={control} rightIcon={FiPhone} type="tel" name="phone" label="Phone" />
          <FieldControlled control={control} rightIcon={FiMail} name="email" label="E-mail (Optional)" />
        </div>
        <SubmitButton formState={formState}>Create Student</SubmitButton>
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