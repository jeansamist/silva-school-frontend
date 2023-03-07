import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { Card } from "./../Card";
import { Heading } from "../../Atoms/Heading";
import { Header } from "../Header";
import { Footer } from "../../Atoms/Footer";
const Story: ComponentMeta<typeof Card> = {
  component: Card,
  title: "Molecules/Card",
};

export default Story;

const Template: ComponentStory<typeof Card> = (args) => (
  <Card {...args}>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, magni. Ad, quia rem praesentium quod iure obcaecati quisquam saepe quae
    repellendus, voluptatem quo iusto fugit natus vel, vitae nulla a?
  </Card>
);

export const Default = Template;
export const Title = Template.bind({});
Title.args = {
  heading: <Heading>Title</Heading>,
};
export const Headed = Template.bind({});
Headed.args = {
  header: <Header />,
};
export const WithFooter = Template.bind({});
WithFooter.args = {
  footer: <Footer>Footer</Footer>,
};
