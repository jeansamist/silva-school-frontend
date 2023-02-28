import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { Box } from "../Box";
const Story: ComponentMeta<typeof Box> = {
  component: Box,
  title: "Atoms/Box",
};
export default Story;

const Template: ComponentStory<typeof Box> = (args) => (
  <Box {...args}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae consequuntur sequi id totam est aliquid esse fuga explicabo laudantium. Quis
    eligendi alias nihil dolorem deserunt debitis corporis autem recusandae nobis!
  </Box>
);

export const Default = Template;
export const Padding = Template.bind({});
Padding.args = {
  padding: true,
};
export const Radius = Template.bind({});
Radius.args = {
  radius: true,
};
export const Border = Template.bind({});
Border.args = {
  border: true,
};
