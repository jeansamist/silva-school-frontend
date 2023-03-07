import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { Alert } from "./../Alert";

const Story: ComponentMeta<typeof Alert> = {
  component: Alert,
  title: "Molecules/Alert",
};

export default Story;

const Template: ComponentStory<typeof Alert> = (args) => (
  <Alert title="Alert !" {...args}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </Alert>
);

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
