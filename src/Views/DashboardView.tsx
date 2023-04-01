import { Card, DataCard, Grid, Heading, Table } from "@silva-school-frontend/ui";
import { FunctionComponent, MouseEvent } from "react";
import { FiBookOpen, FiHome, FiUser, FiUsers } from "react-icons/fi";
import { ViewHeader } from "../Components/Elements/ViewHeader";

export const DashboardView: FunctionComponent = () => {
  function action(e: MouseEvent) {
    return;
  }

  return (
    <div className="view view-dashboard">
      <ViewHeader title="Dashboard" />
      <Grid columns={4} className="mt-5 mb-3">
        <DataCard icon={FiHome} label="Total Classes" value="15" />
        <DataCard icon={FiUsers} label="Total Students" value="5000" color="success" />
        <DataCard label="Total Teachers" value="475" icon={FiBookOpen} color="danger" />
        <DataCard label="Total Wallet" value="55075" color="warning" />
      </Grid>
      <Grid columns={2} className="mt-5 mb-3">
        <Card heading={<Heading type="3">Recents Messages</Heading>}>
          <div className="mt-2">
            <Card>Confirm creation of a new Admin</Card>
          </div>
          <div className="mt-2">
            <Card>Confirm creation of a new Admin</Card>
          </div>
          <div className="mt-2">
            <Card>Confirm creation of a new Admin</Card>
          </div>
          <div className="mt-2">
            <Card>Confirm creation of a new Admin</Card>
          </div>
        </Card>
        <Card heading={<Heading type="3">Recents Messages</Heading>}>
          <div className="mt-2">
            <Card>Confirm creation of a new Admin</Card>
          </div>
          <div className="mt-2">
            <Card>Confirm creation of a new Admin</Card>
          </div>
          <div className="mt-2">
            <Card>Confirm creation of a new Admin</Card>
          </div>
          <div className="mt-2">
            <Card>Confirm creation of a new Admin</Card>
          </div>
          <div className="mt-2">
            <Card>Confirm creation of a new Admin</Card>
          </div>
          <div className="mt-2">
            <Card>Confirm creation of a new Admin</Card>
          </div>
          <div className="mt-2">
            <Card>Confirm creation of a new Admin</Card>
          </div>
          <div className="mt-2">
            <Card>Confirm creation of a new Admin</Card>
          </div>
          <div className="mt-2">
            <Card>Confirm creation of a new Admin</Card>
          </div>
          <div className="mt-2">
            <Card>Confirm creation of a new Admin</Card>
          </div>
          <div className="mt-2">
            <Card>Confirm creation of a new Admin</Card>
          </div>
          <div className="mt-2">
            <Card>Confirm creation of a new Admin</Card>
          </div>
          <div className="mt-2">
            <Card>Confirm creation of a new Admin</Card>
          </div>
          <div className="mt-2">
            <Card>Confirm creation of a new Admin</Card>
          </div>
        </Card>
      </Grid>
      <Table tdata={[]} />
      {/* <Flexbox className="view-actions mt-5 mb-3 aic jcsb" gap>
        <Button size="large" onClick={action}>
          Action
        </Button>
      </Flexbox>
      <div className="content">Welcome Dashboard View</div> */}
    </div>
  );
};
