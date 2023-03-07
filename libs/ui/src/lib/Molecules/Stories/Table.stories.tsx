import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { Table } from "./../Table";

const Story: ComponentMeta<typeof Table> = {
  component: Table,
  title: "Molecules/Table",
};

export default Story;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Default = Template;
