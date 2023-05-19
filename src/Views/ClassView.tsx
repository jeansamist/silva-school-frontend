import React, { FunctionComponent, MouseEvent, useContext, useState, useEffect } from "react";
import { ViewHeader } from "../Components/Elements/ViewHeader";
import { Badge, Brand, Card, DataCard, Flexbox, Grid, Header, Select, Table, TableData } from "@silva-school-frontend/ui";
import { Button } from "@silva-school-frontend/ui";
import { useNavigate, useParams } from "react-router-dom";
import { ApiContext } from "../Contexts/ApiContext";
import { ClassLevel, ClassRoom } from "@silva-school-frontend/models";
import { FiHome, FiPercent, FiUsers } from "react-icons/fi";
import { CreateClassRoomModal } from "../Modals/CreateClassRoomModal";
import { ToastContext } from "../Contexts/ToastContext";
import { AlertContext } from "../Contexts/AlertContext";

export const ClassView: FunctionComponent = () => {
  const { class_level_id } = useParams<{ class_level_id: string }>();
  const { api } = useContext(ApiContext);
  const navigate = useNavigate();
  const [class_level, setclass_level] = useState<ClassLevel>();
  const [classrooms, setclassrooms] = useState<ClassRoom[]>();
  const [createClassRoomModalStatus, setcreateClassRoomModalStatus] = useState(false);
  const [rerend, setrerend] = useState(false);
  const { pushToast } = useContext(ToastContext);
  const { pushAlert } = useContext(AlertContext);
  useEffect(() => {
    api
      .get<ClassLevel>("/class/" + class_level_id)
      .then((response) => {
        setclass_level(response.data);
      })
      .catch(console.log);

    api
      .get<ClassRoom[]>("/class/" + class_level_id + "/classroom")
      .then((response) => {
        if (response.data.length === 0) {
          pushAlert({
            title: "Class Level",
            type: "danger",
            children: "Sorry but this class level are empty",
          });
          return;
        }
        setclassrooms(response.data);
      })
      .catch(console.log);
  }, [class_level_id, createClassRoomModalStatus, rerend]);

  function action(e: MouseEvent) {
    return;
  }
  function navigateToClassRoom(data: TableData, e: MouseEvent) {
    navigate("./" + data.data[1]);
  }

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
                <Button onClick={() => setcreateClassRoomModalStatus(true)}>Create new Class Room</Button>
                <Button
                  onClick={() =>
                    api.post("/class/" + class_level_id + "/classroom").then(() => {
                      pushToast({
                        children: "Class was been created.",
                        type: "success",
                      });
                      setrerend(!rerend);
                    })
                  }
                >
                  Create Automaticaly new Class Room
                </Button>
              </Flexbox>
            </Header>
          }
        >
          <Table
            onClick={navigateToClassRoom}
            thead={[<b>#</b>, "Classroom Id", "Classroom Name"]}
            tdata={classrooms ? classrooms.map((classroom, key) => new TableData([<b>{key + 1}</b>, classroom.id, classroom.name])) : []}
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
