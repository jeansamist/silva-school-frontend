import { Student } from "@silva-school-frontend/models";
import { Avatar, Badge, Card, Heading, Skeleton } from "@silva-school-frontend/ui";
import { FunctionComponent, useContext } from "react";
import { ApiContext } from "../Contexts/ApiContext";
import female from "./../assets/images/F.png";
import male from "./../assets/images/M.png";

export type StudentCardProps = {
  student?: Student;
};

export const StudentCard: FunctionComponent<StudentCardProps> = ({ student }) => {
  const { BAKEND_URL } = useContext(ApiContext);
  return (
    <Card>
      <div className="avatar-container mb-1">
        {student ? (
          <div className="flex jcc">
            <Avatar
              size="hyperlarge"
              image={student.avatar && typeof student.avatar === "string" ? BAKEND_URL + student.avatar : student.sex === "M" ? male : female}
            />
          </div>
        ) : (
          <Skeleton className="flex jcc" type="box" width={"10em"} height={"10em"} radius={"50%"} />
        )}
      </div>
      <div style={{ textAlign: "center" }}>
        {student ? (
          <>
            <Heading type="3">{student.first_name + " " + student.last_name}</Heading>
            <div className="mb-1">{student.code}</div>
            {student.register ? <Badge type="success">SOLVED</Badge> : <Badge type="danger">UNSOLVED</Badge>}
          </>
        ) : (
          <>
            <Skeleton width={"33%"} height={"1.5em"} className="flex jcc" />
            <Skeleton width={"30%"} className="flex jcc mb-1" />
            <Skeleton width={65} height={30} className="flex jcc" />
          </>
        )}
      </div>
    </Card>
  );
};
