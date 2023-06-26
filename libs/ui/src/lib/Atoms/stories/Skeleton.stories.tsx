import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { Skeleton } from "../Skeleton";
const Story: ComponentMeta<typeof Skeleton> = {
  component: Skeleton,
  title: "Atoms/Skeleton",
};
export default Story;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Default = Template;
// Default.args = {
//   label: "Skeleton",
// };
