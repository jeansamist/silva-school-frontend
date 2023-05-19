import React, { FunctionComponent, MouseEvent } from "react";
import { ViewHeader } from "../Components/Elements/ViewHeader";
import { Brand, Card, DataCard, Flexbox, Grid, Header, Select, Table, TableData } from "@silva-school-frontend/ui";
import { Button } from "@silva-school-frontend/ui";
import { useParams } from "react-router-dom";
import { FiHome, FiUsers, FiPercent } from "react-icons/fi";
import { FaFileCsv, FaFilePdf } from "react-icons/fa";

export const ClassRoomView: FunctionComponent = () => {
  const s = useParams();
  console.log(s);

  function action(e: MouseEvent) {
    return;
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
                <Button
                  onClick={() => {
                    return;
                  }}
                  type="secondary"
                  leftIcon={FaFileCsv}
                >
                  Export CSV
                </Button>
                <Button
                  onClick={() => {
                    return;
                  }}
                  type="secondary"
                  leftIcon={FaFilePdf}
                >
                  Export PDF
                </Button>
                <Button
                  onClick={() => {
                    return;
                  }}
                >
                  Create new Student
                </Button>
              </Flexbox>
            </Header>
          }
        >
          <Table thead={[<b>#</b>, "Student Id", "Full Name", "Total Percentage", "QrCode"]} tdata={[]}></Table>
        </Card>
      </div>
    </div>
  );
};
