import React from "react";
import { Button } from "../Atoms/Button";
import Loading from "react-loading";
export function Form({
  buttonLabel = "Validate",
  onSubmit = () => {
    return;
  },
  children,
  largeBtn = true,
  errors = [],
  _ref = null,
  formState = false,
  disabled = false,
}) {
  return (
    <form action="#" method="post" className="form" onSubmit={onSubmit} ref={_ref}>
      {React.Children.map(children, (child, i) => (
        <child.type {...child.props} key={i} disabled={formState ? formState.isSubmitting : disabled} />
      ))}
      <Button disabled={formState ? !formState.isValid || formState.isSubmitting : disabled} largeBtn={largeBtn}>
        {formState ? (
          formState.isSubmitting ? (
            <div className="loader">
              <Loading width={25} height={25} type="spokes" color="#fff" />
            </div>
          ) : (
            <div className="label" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }}>
              {buttonLabel}
            </div>
          )
        ) : (
          <div className="label">{buttonLabel}</div>
        )}
      </Button>
      {errors.map((error, key) => (
        <div key={key} className="form-error">
          {error}
        </div>
      ))}
    </form>
  );
}
