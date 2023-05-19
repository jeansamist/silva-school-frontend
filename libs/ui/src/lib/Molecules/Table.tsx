import React, { FunctionComponent, MouseEvent, ReactNode } from "react";
import { Badge } from "../Atoms/Badge";
export class TableData {
  constructor(public data: ReactNode[]) {}
}
export type TableProps = {
  className?: string;
  thead?: ReactNode[];
  tdata: TableData[];
  onClick?: (row: TableData, e: MouseEvent) => void;
};

export const Table: FunctionComponent<TableProps> = ({
  thead = ["Name", "Surname", "E-mail", "Statut"],
  tdata = [
    {
      data: ["Towns", "Marc Thomas", "marctowns@mail.com", <Badge type="success" label={"Singined"} />],
    },
    {
      data: ["Brook", "Jean", "jeanbrook@mail.com", <Badge type="warning" label={"Pending..."} />],
    },
    {
      data: ["John", "Doe", "johndoe@mail.com", <Badge type="danger" label={"Error !"} />],
    },
  ],
  className = "",
  onClick = () => {
    return;
  },
}) => {
  return (
    <table className={`table${className ? ` ${className}` : ""}`}>
      <thead>
        <tr>
          {thead.map((th, key) => (
            <th key={key}>{th}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tdata.map((tr, key) => (
          <tr
            key={key}
            onClick={(e: MouseEvent) => {
              onClick(tr, e);
            }}
          >
            {tr.data.map((td, key2) => (
              <td key={key2}>{td}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
