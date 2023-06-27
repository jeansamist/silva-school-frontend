import { DataCard, Grid } from "@silva-school-frontend/ui";
import { FunctionComponent, useState } from "react";
import { FiPercent, FiUsers } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { ViewHeader } from "../Components/Elements/ViewHeader";
import { CreateStudentModal } from "../Modals/CreateStudentModal";
import { ClassroomStudentsManager } from "../Components/ClassroomStudentsManager";

export const ClassRoomView: FunctionComponent = () => {
  const { class_room_id } = useParams<{ class_room_id: string; class_level_id: string }>();
  const [createStudentModalStatus, setcreateStudentModalStatus] = useState(false);
  return (
    <div className="view view-classroom">
      <ViewHeader title="ClassRoom" />
      <Grid columns={2} className="mt-5 mb-3">
        <DataCard icon={FiUsers} label="Total Students" value="0" color="danger" />
        <DataCard icon={FiPercent} label="School Success Percentage" value="76.757%" color="success" />
      </Grid>
      <div className="content">
        <ClassroomStudentsManager {...{ createStudentModalStatus, setcreateStudentModalStatus }} />
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
