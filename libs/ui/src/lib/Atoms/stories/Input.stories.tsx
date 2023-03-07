import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input } from "./../Input";

const Story: ComponentMeta<typeof Input> = {
  component: Input,
  title: "Atoms/Input",
};

export default Story;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template;
export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
export const Error = Template.bind({});
Error.args = {
  error: true,
};
export const Small = Template.bind({});
Small.args = {
  size: "small",
};
export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
};
export const Big = Template.bind({});
Big.args = {
  size: "big",
};
