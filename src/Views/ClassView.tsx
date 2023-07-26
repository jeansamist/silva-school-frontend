import { ClassLevel, ClassRoom } from "@silva-school-frontend/models";
import {
  Brand,
  Button,
  Card,
  DataCard,
  Dropdown,
  DropdownElement,
  Flexbox,
  Grid,
  Header,
  Select,
  Skeleton,
  Table,
  TableData,
  tableDataSkeleton,
} from "@silva-school-frontend/ui";
import { AxiosError } from "axios";
import { FunctionComponent, MouseEvent, useCallback, useContext, useEffect, useState } from "react";
import { FiChevronDown, FiHome, FiInfo, FiPercent, FiTrash, FiUsers } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";
import { ViewHeader } from "../Components/Elements/ViewHeader";
import { AlertContext } from "../Contexts/AlertContext";
import { ApiContext } from "../Contexts/ApiContext";
import { ToastContext } from "../Contexts/ToastContext";
import { CreateClassRoomModal } from "../Modals/CreateClassRoomModal";
import { ConfirmContext } from "../Contexts/ConfirmContext";

export const ClassView: FunctionComponent = () => {
  const { class_level_id } = useParams<{ class_level_id: string }>();
  const { api } = useContext(ApiContext);
  const navigate = useNavigate();
  const [class_level, setclass_level] = useState<ClassLevel>();
  const [classrooms, setclassrooms] = useState<ClassRoom[]>();
  const [createClassRoomModalStatus, setcreateClassRoomModalStatus] = useState(false);
  const [deleteConfirmStatus, setdeleteConfirmStatus] = useState(false);
  const [rerend, setrerend] = useState(false);
  const { pushToast } = useContext(ToastContext);
  const { pushAlert } = useContext(AlertContext);
  const { pushConfirm } = useContext(ConfirmContext);

  const createAutomaticalyClassroom = useCallback(() => {
    api.post("/class/" + class_level_id + "/classroom").then(() => {
      pushToast({
        children: "Class was been created.",
        type: "success",
      });
      setrerend(!rerend);
    });
  }, [api, class_level_id, pushToast, rerend]);
  useEffect(() => {
    api
      .get<ClassLevel>("/class/" + class_level_id)
      .then((response) => {
        setclass_level(response.data);
      })
      .catch((reason) => {
        const error = reason as AxiosError;
        pushAlert({
          title: error.code,
          type: "danger",
          children: (
            <>
              Sorry but we cannot get class level informations <br /> <i>{error.message}</i>
            </>
          ),
        });
      });

    api
      .get<ClassRoom[]>("/class/" + class_level_id + "/classroom")
      .then((response) => {
        if (response.data.length === 0) {
          pushAlert({
            title: "",
            icon: FiInfo,
            type: "default",
            onClick: createAutomaticalyClassroom,
            children: (
              <>
                Sorry but this class is empty. Click here if you <br /> want automaticaly create a new classroom
              </>
            ),
          });
        }
        setclassrooms(response.data);
      })
      .catch((reason) => {
        const error = reason as AxiosError;
        pushAlert({
          title: error.code,
          type: "danger",
          children: (
            <>
              Sorry but we cannot get classrooms list <br /> <i>{error.message}</i>
            </>
          ),
        });
      });
  }, [class_level_id, createClassRoomModalStatus, rerend, api, pushAlert, createAutomaticalyClassroom]);

  function navigateToClassRoom(data: TableData) {
    navigate("./classroom/" + data.id);
  }

  const StudentTableLoadData = tableDataSkeleton(new TableData([<Skeleton width={64} />, <Skeleton />, <Skeleton width={64} />]), 5);

  return (
    <div className="view view-class">
      <ViewHeader title={class_level?.name} />
      <Grid columns={3} className="mt-5 mb-3">
        <DataCard icon={FiHome} label="Total Class Rooms" value={class_level?.classrooms?.length.toString()} color="danger  " />
        <DataCard icon={FiUsers} label="Total Students" value="0" color="warning" />
        <DataCard icon={FiPercent} label="School Success Percentage" value="76.757%" color="success" />
      </Grid>
      <div className="content mt-5 mb-3">
        <Card
          header={
            <Header brand={new Brand("left", "text", "Class Rooms in " + class_level?.name)}>
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
                    new DropdownElement("#", FiHome, "Create new Class Room", "button", () => {
                      setcreateClassRoomModalStatus(true);
                    }),
                    new DropdownElement("#", FiHome, "Create Automaticaly new Class Room", "button", () => {
                      createAutomaticalyClassroom();
                    }),
                    new DropdownElement("#", FiTrash, <b style={{ color: "var(--red)" }}>Delete Classlevel</b>, "button", () => {
                      pushConfirm({
                        children: "attention",
                        isVisible: deleteConfirmStatus,
                        setter: setdeleteConfirmStatus,
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
          <Table
            onClick={navigateToClassRoom}
            thead={[<b>#</b>, "Classroom Name", "Number of Students"]}
            tdata={
              classrooms
                ? classrooms.map((classroom, key) => new TableData([key + 1, <b>{classroom.name}</b>, classroom.students?.length], classroom.id))
                : StudentTableLoadData
            }
          ></Table>
        </Card>
      </div>
      <div className="modals">
        <CreateClassRoomModal
          isVisible={createClassRoomModalStatus}
          setter={setcreateClassRoomModalStatus}
          class_level_id={parseFloat(class_level_id ? class_level_id : "0")}
        />
      </div>
    </div>
  );
};
