import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { DatePickerField } from "./../DatePickerField";

const Story: ComponentMeta<typeof DatePickerField> = {
  component: DatePickerField,
  title: "Atoms/DatePickerField",
};

export default Story;

const Template: ComponentStory<typeof DatePickerField> = (args) => <DatePickerField {...args} />;

export const Default = Template;
