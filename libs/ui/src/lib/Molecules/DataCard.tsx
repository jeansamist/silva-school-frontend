import { FunctionComponent } from "react";
import { IconType } from "react-icons";
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
    <Card className={`data-card data-card-${color}${className ? ` ${className}` : ""}`}>
      <div className="data-card-content">
        <div className="data-card-icon">{Icon ? <Icon size={35} className="flex lh-0" /> : <FiDollarSign size={45} className="flex lh-0" />}</div>
        <div className="data-card-data">
          <div className="data-card-data-value">{label}</div>
          <Heading type="3">{value}</Heading>
        </div>
      </div>
    </Card>
  );
};
