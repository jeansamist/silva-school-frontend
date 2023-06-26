import { FunctionComponent, useContext, useEffect, useState } from "react";
import { ViewHeader } from "../Components/Elements/ViewHeader";
import {
  Avatar,
  Badge,
  Brand,
  Card,
  DataCard,
  Dropdown,
  DropdownElement,
  Flexbox,
  Footer,
  Grid,
  Header,
  Select,
  Skeleton,
  Table,
  TableData,
  tableDataSkeleton,
} from "@silva-school-frontend/ui";
import { Button } from "@silva-school-frontend/ui";
import { useParams } from "react-router-dom";
import { FiUsers, FiPercent, FiInfo, FiUserPlus, FiChevronDown, FiPlus } from "react-icons/fi";
import { FaFileCsv, FaFilePdf } from "react-icons/fa";
import { CreateStudentModal } from "../Modals/CreateStudentModal";
import { ApiContext } from "../Contexts/ApiContext";
import { Student } from "@silva-school-frontend/models";
import { AlertContext } from "../Contexts/AlertContext";
import { AxiosError } from "axios";
import male from "./../assets/images/M.png";
import female from "./../assets/images/F.png";

export const ClassRoomView: FunctionComponent = () => {
  const { class_room_id, class_level_id } = useParams<{ class_room_id: string; class_level_id: string }>();
  const { api, BAKEND_URL } = useContext(ApiContext);
  const [createStudentModalStatus, setcreateStudentModalStatus] = useState(false);
  const [studentListPage, setstudentListPage] = useState(1);
  const [studentListPageLoading, setstudentListPageLoading] = useState(false);
  const [students, setstudents] = useState<Student[]>();
  const { pushAlert } = useContext(AlertContext);

  useEffect(() => {
    const url = "/class/" + class_level_id + "/classroom/" + class_room_id + "/student?page=" + studentListPage;
    api
      .get<Student[]>(url)
      .then((response) => {
        const students = response.data;
        setstudents(students);
        setstudentListPageLoading(false);
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
  }, [createStudentModalStatus, class_room_id, api, class_level_id, pushAlert, studentListPage]);

  const StudentTableLoadData = tableDataSkeleton(
    new TableData([
      <Skeleton type="box" width={32} height={32} radius={"50%"} />,
      <Skeleton />,
      <Skeleton />,
      <Skeleton />,
      <Skeleton />,
      <Skeleton />,
    ]),
    5
  );
  function goToNextStudentPage() {
    setstudentListPage(studentListPage + 1);
    setstudentListPageLoading(true);
  }
  function goToPreviousStudentPage() {
    if (studentListPage !== 1) {
      setstudentListPage(studentListPage - 1);
      setstudentListPageLoading(true);
    }
  }
  return (
    <div className="view view-classroom">
      <ViewHeader title="ClassRoom" />
      <Grid columns={2} className="mt-5 mb-3">
        <DataCard icon={FiUsers} label="Total Students" value="0" color="danger" />
        <DataCard icon={FiPercent} label="School Success Percentage" value="76.757%" color="success" />
      </Grid>
      <div className="content">
        <Card
          footer={
            <Footer>
              <Flexbox className="aic jcsb">
                <Button onClick={goToPreviousStudentPage}>Presious</Button>
                <Badge>
                  Page {studentListPage}
                  {studentListPageLoading ? " is loading..." : ""}
                </Badge>
                <Button onClick={goToNextStudentPage}>Next</Button>
              </Flexbox>
            </Footer>
          }
          header={
            <Header brand={new Brand("left", "text", "Students in this class")}>
              <Flexbox className="aic" gap>
                <Select
                  label="Order by"
                  options={[
                    { label: "Class level", value: "class_level" },
                    { label: "Class name", value: "class_name" },
                  ]}
                />
                <Dropdown
                  position="right"
                  elements={[
                    new DropdownElement("#", FiUserPlus, "Create new Student", "button", () => {
                      setcreateStudentModalStatus(true);
                    }),
                    new DropdownElement(
                      BAKEND_URL + "/download/student_list_pdf?classroom_id=" + class_room_id,
                      FaFilePdf,
                      "Export PDF",
                      "link",
                      () => {
                        return;
                      }
                    ),
                    new DropdownElement("#", FaFileCsv, "Export CSV", "button", () => {
                      return;
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
          <Table
            thead={["Avatar", "Full Name", "Student Id", "BirthDate", "Status", "Register"]}
            tdata={
              students
                ? students.map(
                    (student) =>
                      new TableData([
                        <Avatar image={student.avatar ? student.avatar : student.sex === "M" ? male : female} size="small" />,
                        <b>{student.first_name + " " + student.last_name}</b>,
                        student.id,
                        student.birthdate?.toString(),
                        student.status,
                        student.register ? <Badge type="success">SOLVED</Badge> : <Badge type="danger">UNSOLVED</Badge>,
                      ])
                  )
                : StudentTableLoadData
            }
          ></Table>
        </Card>
      </div>
      <div className="modals">
        <CreateStudentModal
          isVisible={createStudentModalStatus}
          setter={setcreateStudentModalStatus}
          classroom_id={parseFloat(class_room_id ? class_room_id : "")}
        />
      </div>
    </div>
  );
};
