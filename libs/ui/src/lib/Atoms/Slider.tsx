import React, { PropsWithChildren, FunctionComponent, useState } from "react";
import Slider from "rc-slider";
import theme from "../../constants/theme";
import "rc-slider/assets/index.css";
export type FormSliderProps = PropsWithChildren<{
  label?: string;
  min?: number;
  max?: number;
  onChange?: (newValue: number) => void;
  className?: string;
}>;

export const FormSlider: FunctionComponent<FormSliderProps> = ({
  label = "Slider",
  min = 0,
  max = 10,
  onChange = () => {
    return;
  },
}) => {
  const [active, setactive] = useState<boolean>(false);
  const [value, setvalue] = useState<number>(0);
  function onFocus() {
    setactive(true);
  }
  function onBlur() {
    setactive(false);
  }
  return (
    <div>
      <div className="flex aic jcsb">
        <b className="label" style={{ color: active ? theme.COLORS.primary : theme.COLORS.colorInfo }}>
          {label}
        </b>
        <div className="value">{value}</div>
      </div>
      <Slider
        railStyle={{ height: "0.3em", background: theme.COLORS.border }}
        trackStyle={{ height: "0.3em", background: theme.COLORS.primary }}
        /*railStyle={{ background: "red" }}*/ handleStyle={{
          background: theme.COLORS.primary,
          opacity: 1,
          border: "none",
          boxShadow: "none",
        }}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={(v) => {
          if (typeof v === "number") {
            setvalue(v);
            onChange(v);
          }
        }}
        max={max}
        min={min}
        ariaLabelledByForHandle={"test"}
      />
      {/* <Range /> */}
    </div>
  );
};
