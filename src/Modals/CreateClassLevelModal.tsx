import { yupResolver } from "@hookform/resolvers/yup";
import { ClassLevel } from "@silva-school-frontend/models";
import { FieldControlled, Grid, Modal, Select } from "@silva-school-frontend/ui";
import { AxiosError } from "axios";
import { FunctionComponent, useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaMoneyBillWave } from "react-icons/fa";
import { FiDollarSign, FiHome, FiPercent } from "react-icons/fi";
import * as yup from "yup";
import { SubmitButton } from "../Components/SubmitButton";
import { ApiContext } from "../Contexts/ApiContext";
import { AuthContext } from "../Contexts/AuthContext";
// import { range } from "@silva-school-frontend/functions";
// import { Payment } from "libs/models/src/lib/Payment";
import { Payment } from "@silva-school-frontend/models";

export type CreateClassLevelModalProps = {
  isVisible?: boolean;
  setter?: (status: boolean) => void;
};
const schema = yup.object({
  name: yup.string().required(),
  level: yup.number().min(0).required(),
  installments: yup.number().min(2).max(5),
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
  const [installments, setinstallments] = useState<number>(3);
  const [payment, setpayment] = useState<"full" | "installment">("full");

  const { control, formState, handleSubmit } = useForm<Partial<FormValues>>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  console.log();

  const onSubmit: SubmitHandler<Partial<FormValues>> = async (data) => {
    data.school = auth.current_school?.id;
    data.subjects = [];
    const payment_: Payment = {
      name: payment + (payment === "full" ? 1 : installments),
      payment_type: payment,
      installments: payment === "full" ? 1 : installments,
    };
    api
      .post<Payment>("/payment/classlevelpayment", payment_)
      .then((response) => {
        data.payment = response.data.id;
        api
          .post("/class", data)
          .then(() => {
            setter(false);
          })
          .catch((reason_) => {
            const reason = reason_ as AxiosError;
            const err = reason.response?.data as CreateClassLevelError;
            seterror(err);
          });
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
          <Grid columns={payment === "installment" ? 2 : 1}>
            <Select
              label="Method of payment"
              onChange={({ value }) => {
                setpayment(value);
              }}
              options={[
                {
                  label: (
                    <div className="flex aic flex-gap">
                      <FaMoneyBillWave className="flex lh-0" /> Full
                    </div>
                  ),
                  value: "full",
                },
                {
                  label: (
                    <div className="flex aic flex-gap">
                      <FaMoneyBillWave className="flex lh-0" /> Installment
                    </div>
                  ),
                  value: "installment",
                },
              ]}
            />
            {payment === "installment" && (
              <FieldControlled
                control={control}
                rightIcon={FiDollarSign}
                name="installments"
                type="number"
                onChange={(v) => setinstallments(parseFloat(v))}
                defaultValue={installments}
                label="Instaments number"
                activated
              />
            )}
          </Grid>
          <Grid columns={2}>
            <FieldControlled
              control={control}
              rightIcon={FiDollarSign}
              name="new_student_price"
              type="number"
              label="Class Level Price For New Student"
            />
            <FieldControlled control={control} rightIcon={FiDollarSign} name="current_price" type="number" label="Class Level Current Price" />
          </Grid>
          {/* {payment === "installment" && (
              <Grid columns={3}>
                {range(0, installments - 1).map((value, i) => {
                  return (
                    <FieldControlled
                      key={i}
                      control={control}
                      rightIcon={FiDollarSign}
                      name={"installment" + (i + 1)}
                      type="number"
                      activated
                      defaultValue={}
                      disabled
                      label={"Installment " + (i + 1)}
                    />
                  );
                })}
              </Grid>
            )} */}
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
