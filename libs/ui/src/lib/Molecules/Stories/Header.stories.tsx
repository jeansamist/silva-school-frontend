import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { Header, Brand } from "./../Header";
import logo from "./../../../assets/images/silva-logo-colors-png.png";

const Story: ComponentMeta<typeof Header> = {
  component: Header,
  title: "Molecules/Header",
};
export default Story;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Default = Template;
const brandUndelined = new Brand();
brandUndelined.underlined = true;
const brandRight = new Brand();
brandRight.position = "right";
const brandImage = new Brand("left", "image", logo, false, 100);
const brandImageAtRight = new Brand("right", "image", logo, false, 100);
export const HeaderBordered = Template.bind({});
HeaderBordered.args = {
  border: true,
};
export const HeaderDark = Template.bind({});
HeaderDark.args = {
  dark: true,
};
export const BrandUndelined = Template.bind({});
BrandUndelined.args = {
  brand: brandUndelined,
};
export const BrandAtRight = Template.bind({});
BrandAtRight.args = {
  brand: brandRight,
};
export const BrandImage = Template.bind({});
BrandImage.args = {
  brand: brandImage,
};
export const BrandImageAtRight = Template.bind({});
BrandImageAtRight.args = {
  brand: brandImageAtRight,
};
