import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { Select } from "./../Select";

const Story: ComponentMeta<typeof Select> = {
  component: Select,
  title: "Atoms/Select",
};

export default Story;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Default = Template;

Default.args = {
  options: [
    {
      label: "Option 1",
      value: "Option value",
    },
    {
      label: "Option 2",
      value: "Option value",
    },
  ],
};
