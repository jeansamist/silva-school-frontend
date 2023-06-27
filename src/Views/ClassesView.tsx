import {
  Badge,
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
  Table,
  TableData,
} from "@silva-school-frontend/ui";
import { FunctionComponent, MouseEvent, useState, useEffect, useContext } from "react";
import { FiChevronDown, FiHome, FiPercent, FiTrash } from "react-icons/fi";
import { ViewHeader } from "../Components/Elements/ViewHeader";
import { useNavigate } from "react-router-dom";
import { CreateClassLevelModal } from "../Modals/CreateClassLevelModal";
import { AuthContext } from "../Contexts/AuthContext";
import { ApiContext } from "../Contexts/ApiContext";
import { ClassLevel } from "@silva-school-frontend/models";

export const ClassesView: FunctionComponent = () => {
  const navigate = useNavigate();
  const { current_school } = useContext(AuthContext);
  const { api } = useContext(ApiContext);
  const [createClassLevelModalStatus, setcreateClassLevelModalStatus] = useState(false);
  const [class_levels, setclass_levels] = useState<ClassLevel[]>();
  const [totalClasses, settotalClasses] = useState<number>(0);
  function navigateToClassLevel(data: TableData, e: MouseEvent) {
    navigate("./class_level/" + data.id);
  }
  useEffect(() => {
    api
      .get<ClassLevel[]>("/class", {
        headers: {
          "School-Id": current_school?.id,
        },
      })
      .then(({ data }) => {
        let nbr = 0;
        data.forEach((c) => {
          const x = c.classrooms?.length;
          if (x) nbr += x;
        });
        settotalClasses(nbr);
        setclass_levels(data);
      })
      .catch(console.log);
  }, [api, createClassLevelModalStatus, current_school]);

  return (
    <div className="view view-classes">
      <ViewHeader title="Classes Manager" isIndex />
      <Grid columns={3} className="mt-5 mb-3">
        <DataCard icon={FiHome} label="Total Class Levels" value={current_school?.class_levels?.length.toString()} color="danger" />
        <DataCard icon={FiHome} label="Total Class Rooms" value={totalClasses.toString()} color="warning" />
        <DataCard icon={FiPercent} label="School Success Percentage" value="76.757%" color="success" />
      </Grid>
      {/* <Flexbox className="view-actions mt-3 mb-3 aic jcsb" gap>
        <Button size="large" onClick={action}>
          Action
        </Button>
      </Flexbox> */}
      <div className="content mt-5 mb-3">
        <Card
          header={
            <Header brand={new Brand("left", "text", "Class Levels in Noutcha School")}>
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
                    new DropdownElement("#", FiHome, "Create new Class Level", "button", () => {
                      setcreateClassLevelModalStatus(true);
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
            onClick={navigateToClassLevel}
            thead={[<b>#</b>, "Class Name", "Class Level", "Total Students", "Success Percentage"]}
            tdata={
              class_levels
                ? class_levels.map(
                    (class_level, key) =>
                      new TableData(
                        [key + 1, <b>{class_level.name}</b>, class_level.level, 800, <Badge type="success">85.58%</Badge>],
                        class_level.id
                      )
                  )
                : []
            }
          ></Table>
        </Card>
      </div>
      <div className="modals">
        <CreateClassLevelModal isVisible={createClassLevelModalStatus} setter={setcreateClassLevelModalStatus} />
      </div>
    </div>
  );
};
