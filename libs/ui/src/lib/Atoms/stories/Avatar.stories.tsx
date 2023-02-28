import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { Avatar } from "./../Avatar";
const Story: ComponentMeta<typeof Avatar> = {
  component: Avatar,
  title: "Atoms/Avatar",
};
export default Story;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
