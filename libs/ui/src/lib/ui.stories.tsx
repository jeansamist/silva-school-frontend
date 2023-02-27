import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Ui } from './ui';

const Story: ComponentMeta<typeof Ui> = {
  component: Ui,
  title: 'Ui',
};
export default Story;

const Template: ComponentStory<typeof Ui> = (args) => <Ui {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
