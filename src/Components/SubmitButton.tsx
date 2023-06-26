import { Button } from "@silva-school-frontend/ui";
import { FunctionComponent, PropsWithChildren } from "react";
import { FormState } from "react-hook-form";
import Loading from "react-loading";
export type SubmitButtonProps = PropsWithChildren<{
  formState: FormState<Partial<any>>;
}>;
export const SubmitButton: FunctionComponent<SubmitButtonProps> = ({ formState, children }) => {
  return (
    <Button type="primary" size="large" disabled={formState ? !formState.isValid || formState.isSubmitting : true}>
      {formState ? (
        formState.isSubmitting ? (
          <div className="loader">
            <Loading width={25} height={25} type="spokes" color="#fff" />
          </div>
        ) : (
          <div className="label">{children}</div>
        )
      ) : (
        <div className="label">{children}</div>
      )}
    </Button>
  );
};
