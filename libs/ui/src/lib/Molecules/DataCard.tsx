import { FunctionComponent } from "react";
import { IconType } from "react-icons";
import { Flexbox } from "../Containers/Flexbox";
import { Heading } from "./../Atoms/Heading";
import { Card } from "./Card";
import { FiDollarSign } from "react-icons/fi";
export type DataCardProps = {
  className?: string;
  value?: string;
  label?: string;
  icon?: IconType | null;
  color?: string;
};

export const DataCard: FunctionComponent<DataCardProps> = ({ value = "0.000", label = "Data card", icon: Icon, color = "light", className = "" }) => {
  return (
    <Card className={`data-card${color === "light" ? " data-card-light" : " data-card-dark"}${className ? ` ${className}` : ""}`}>
      <Flexbox className="aic" gap>
        <div className="data-card-icon">{Icon ? <Icon size={45} className="flex lh-0" /> : <FiDollarSign size={45} className="flex lh-0" />}</div>
        <div className="data-card-data">
          <Heading type="3">{value}</Heading>
          <div className="data-card-data-value">{label}</div>
        </div>
      </Flexbox>
    </Card>
  );
};
