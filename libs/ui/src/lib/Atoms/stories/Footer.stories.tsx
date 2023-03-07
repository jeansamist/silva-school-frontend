import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { Footer } from "./../Footer";

const Story: ComponentMeta<typeof Footer> = {
  component: Footer,
  title: "Atoms/Footer",
};

export default Story;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Default = Template;
