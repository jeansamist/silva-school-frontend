import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { Paragraph } from "./../Paragraph";

const Story: ComponentMeta<typeof Paragraph> = {
  component: Paragraph,
  title: "Atoms/Paragraph",
};

export default Story;

const Template: ComponentStory<typeof Paragraph> = (args) => (
  <Paragraph {...args}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam placeat deleniti fuga voluptatibus? Temporibus commodi velit ducimus tempora
    dolores, sunt doloremque quisquam optio corporis ipsa harum magni soluta eos eligendi.
  </Paragraph>
);

export const Default = Template;
