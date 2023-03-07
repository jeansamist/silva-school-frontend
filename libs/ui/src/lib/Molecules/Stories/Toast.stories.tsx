import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { Toast } from "./../Toast";

const Story: ComponentMeta<typeof Toast> = {
  component: Toast,
  title: "Molecules/Toast",
};

export default Story;

const Template: ComponentStory<typeof Toast> = (args) => <Toast {...args}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Toast>;

export const Default = Template;
export const Success = Template.bind({});
Success.args = {
  type: "success",
};
export const Warning = Template.bind({});
Warning.args = {
  type: "warning",
};
export const Danger = Template.bind({});
Danger.args = {
  type: "danger",
};
