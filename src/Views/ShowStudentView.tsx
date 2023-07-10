import { Student } from "@silva-school-frontend/models";
import { Brand, Button, Card, Dropdown, DropdownElement, Flexbox, Grid, Header, Heading, Skeleton } from "@silva-school-frontend/ui";
import { AxiosError } from "axios";
import { FunctionComponent, useContext, useEffect, useState } from "react";
import { FiCalendar, FiChevronDown, FiEdit, FiMapPin, FiPhone, FiTrash, FiUser, FiUserCheck } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";
import { ViewHeader } from "../Components/Elements/ViewHeader";
import { StudentCard } from "../Components/StudentCard";
import { AlertContext } from "../Contexts/AlertContext";
import { ToastContext } from "../Contexts/ToastContext";
import { ApiContext } from "../Contexts/ApiContext";
import { EditStudentModal } from "../Modals/EditStudentModal";

export const ShowStudentView: FunctionComponent = () => {
  const { class_level_id, student_id } = useParams<{ class_room_id: string; class_level_id: string; student_id: string }>();

  const [editStudentModalStatus, seteditStudentModalStatus] = useState<boolean>(false);

  const navigate = useNavigate();
  const { api } = useContext(ApiContext);
  const [student, setstudent] = useState<Student>();
  const { pushAlert } = useContext(AlertContext);
  const { pushToast } = useContext(ToastContext);
  useEffect(() => {
    api
      .get<Student>("/student/" + student_id)
      .then(({ data }) => {
        setstudent(data);
      })
      .catch((reason) => {
        const error = reason as AxiosError;
        pushAlert({
          title: error.code,
          type: "danger",
          children: (
            <>
              Sorry but we cannot get students <br /> <i>{error.message}</i>
            </>
          ),
        });
      });
  }, [api, student_id, pushAlert, editStudentModalStatus]);
  return (
    <div className="view view-showstudent">
      <ViewHeader title="Student Informations" />

      <div className="mt-5 content">
        <Grid columns={2} className="show-student-grid">
          <div className="w100">
            <StudentCard student={student} />
          </div>
          <Card
            className="w100"
            header={
              <Header brand={new Brand("left", "text", <Heading type="4">Student informations</Heading>)}>
                <Flexbox className="aic" gap>
                  <Dropdown
                    position="right"
                    elements={[
                      new DropdownElement("#", FiEdit, "Edit Student", "button", () => {
                        seteditStudentModalStatus(true);
                      }),
                      new DropdownElement("#", FiUserCheck, "Register Student", "button", () => {
                        return;
                      }),
                      new DropdownElement("#", FiTrash, <b style={{ color: "var(--red)" }}>Delete Student</b>, "button", () => {
                        api.delete<Student>("/student/" + student_id).then(() => {
                          pushToast({
                            children: "Student has been delete",
                            type: "success",
                          });
                          navigate("./../../");
                        });
                      }),
                    ]}
                  >
                    <Button>
                      <div className="flex aic flex-gap">
                        Actions <FiChevronDown style={{ transform: "translateY(1px)" }} />
                      </div>
                    </Button>
                  </Dropdown>
                </Flexbox>
              </Header>
            }
          >
            <div className="flex flex-gap fdc">
              <Flexbox gap className="aic">
                <FiUser />
                {student ? <div>{student.sex === "M" ? "Male" : "Female"}</div> : <Skeleton />}
              </Flexbox>
              <Flexbox gap className="aic">
                <FiUser />
                {student ? <div>{student.status} student</div> : <Skeleton />}
              </Flexbox>
              <Flexbox gap className="aic">
                <FiCalendar />
                {student ? <div>{student.birthdate?.toString()}</div> : <Skeleton />}
              </Flexbox>

              <Flexbox gap className="aic">
                <FiMapPin />
                {student ? <div>{student.address}</div> : <Skeleton />}
              </Flexbox>

              <Flexbox gap className="aic">
                <FiPhone />
                {student ? <div>{student.phone}</div> : <Skeleton />}
              </Flexbox>
            </div>
          </Card>
        </Grid>
      </div>
      <div className="modals">
        {student && class_level_id && (
          <EditStudentModal class_level_id={class_level_id} isVisible={editStudentModalStatus} setter={seteditStudentModalStatus} student={student} />
        )}
      </div>
    </div>
  );
};
