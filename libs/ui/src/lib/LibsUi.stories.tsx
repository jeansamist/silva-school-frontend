import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { LibsUi } from './LibsUi';

const Story: ComponentMeta<typeof LibsUi> = {
  component: LibsUi,
  title: 'LibsUi',
};
export default Story;

const Template: ComponentStory<typeof LibsUi> = (args) => <LibsUi {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
