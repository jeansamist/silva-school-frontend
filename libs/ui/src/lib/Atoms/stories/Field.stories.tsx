import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { Field } from "../Field";
import { FiUser, FiArrowDown } from "react-icons/fi";
const Story: ComponentMeta<typeof Field> = {
  component: Field,
  title: "Atoms/Field",
};
export default Story;

const Template: ComponentStory<typeof Field> = (args) => <Field {...args} />;

export const Default = Template;
Default.args = {
  label: "Field",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
export const Error = Template.bind({});
Error.args = {
  error: "We have an error",
};
export const IconLeft = Template.bind({});
IconLeft.args = {
  leftIcon: FiUser,
};
export const IconRight = Template.bind({});
IconRight.args = {
  rightIcon: FiUser,
};
export const IconLeftAndRight = Template.bind({});
IconLeftAndRight.args = {
  leftIcon: FiUser,
  rightIcon: FiArrowDown,
};
