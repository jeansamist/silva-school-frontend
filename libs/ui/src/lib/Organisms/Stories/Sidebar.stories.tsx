import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { Sidebar } from "./../Sidebar";

const Story: ComponentMeta<typeof Sidebar> = {
  component: Sidebar,
  title: "Organisms/Sidebar",
};

export default Story;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Default = Template;
