import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { FormSlider } from "./../Slider";

const Story: ComponentMeta<typeof FormSlider> = {
  component: FormSlider,
  title: "Atoms/FormSlider",
};

export default Story;

const Template: ComponentStory<typeof FormSlider> = (args) => <FormSlider {...args} />;

export const Default = Template;
