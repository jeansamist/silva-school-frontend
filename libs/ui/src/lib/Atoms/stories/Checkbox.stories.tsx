import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { Checkbox } from "./../Checkbox";
const Story: ComponentMeta<typeof Checkbox> = {
  component: Checkbox,
  title: "Atoms/Checkbox",
};
export default Story;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
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
  size: "big  ",
};
