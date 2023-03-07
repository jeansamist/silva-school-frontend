import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { DataCard } from "./../DataCard";

const Story: ComponentMeta<typeof DataCard> = {
  component: DataCard,
  title: "Molecules/DataCard",
};

export default Story;

const Template: ComponentStory<typeof DataCard> = (args) => <DataCard {...args} />;

export const Default = Template;
