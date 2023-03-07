import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { TextLink } from "./../TextLink";

const Story: ComponentMeta<typeof TextLink> = {
  component: TextLink,
  title: "Atoms/TextLink",
};

export default Story;

const Template: ComponentStory<typeof TextLink> = (args) => <TextLink {...args}>TextLink</TextLink>;

export const Default = Template;
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
