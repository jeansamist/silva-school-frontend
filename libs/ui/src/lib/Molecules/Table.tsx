import React, { FunctionComponent, MouseEvent, ReactNode } from "react";
export class TableData {
  constructor(public data: ReactNode[], public id?: number | string) {}
}
export type TableProps = {
  className?: string;
  thead?: ReactNode[];
  tdata: TableData[];
  onClick?: (row: TableData, e: MouseEvent) => void;
};

export function tableDataSkeleton(tableDataModel: TableData, numberOfLines: number): TableData[] {
  const toReturn: TableData[] = [];
  for (let i = 0; i < (numberOfLines ? numberOfLines : 1); i++) {
    toReturn.push(tableDataModel);
  }
  return toReturn;
}
export const Table: FunctionComponent<TableProps> = ({
  thead = ["Name", "Surname", "E-mail", "Statut"],
  tdata = [],
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
