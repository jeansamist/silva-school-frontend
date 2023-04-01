import { Badge, Brand, Button, Card, DataCard, Flexbox, Grid, Header, Select, Table, TableData } from "@silva-school-frontend/ui";
import { FunctionComponent, MouseEvent, useState } from "react";
import { FiHome, FiPercent } from "react-icons/fi";
import { ViewHeader } from "../Components/Elements/ViewHeader";
import { useNavigate } from "react-router-dom";
import { CreateClassLevelModal } from "../Modals/CreateClassLevelModal";

export const ClassesView: FunctionComponent = () => {
  const navigate = useNavigate();
  const [createClassLevelModalStatus, setcreateClassLevelModalStatus] = useState(false);
  function navigateToClassLevel(data: TableData, e: MouseEvent) {
    navigate("./" + data.data[0]);
  }

  return (
    <div className="view view-classes">
      <ViewHeader title="Classes Manager" />
      <Grid columns={3} className="mt-5 mb-3">
        <DataCard icon={FiHome} label="Total Class Levels" value="5" color="danger" />
        <DataCard icon={FiHome} label="Total Class Rooms" value="15" color="warning" />
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
                <Button onClick={() => setcreateClassLevelModalStatus(true)}>Create new Class Level</Button>
              </Flexbox>
            </Header>
          }
        >
          <Table
            onClick={navigateToClassLevel}
            thead={["Class Name", "Class Level", "Total Students", "Success Percentage"]}
            tdata={[
              new TableData(["6e", 1, 200, <Badge type="success">85.58%</Badge>]),
              new TableData(["5e", 2, 800, <Badge type="success">75.02%</Badge>]),
              new TableData(["4e", 3, 700, <Badge type="warning">55.72%</Badge>]),
              new TableData(["3e", 4, 850, <Badge type="success">89.52%</Badge>]),
              new TableData(["2nd", 5, 950, <Badge type="danger">49.82%</Badge>]),
            ]}
          ></Table>
        </Card>
      </div>
      <div className="modals">
        <CreateClassLevelModal isVisible={createClassLevelModalStatus} setter={setcreateClassLevelModalStatus} />
      </div>
    </div>
  );
};
