import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { Radio } from "./../Radio";

const Story: ComponentMeta<typeof Radio> = {
  component: Radio,
  title: "Atoms/Radio",
};

export default Story;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const Default = Template;
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
