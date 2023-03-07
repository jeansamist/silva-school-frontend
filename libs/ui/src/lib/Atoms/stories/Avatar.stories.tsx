import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { Avatar } from "./../Avatar";
const Story: ComponentMeta<typeof Avatar> = {
  component: Avatar,
  title: "Atoms/Avatar",
};
export default Story;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

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
  size: "big",
};
export const Large = Template.bind({});
Large.args = {
  size: "large",
};
export const HyperLarge = Template.bind({});
HyperLarge.args = {
  size: "hyperlarge",
};