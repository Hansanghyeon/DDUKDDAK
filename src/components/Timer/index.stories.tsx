import { ComponentStory, ComponentMeta } from '@storybook/react';

import Timer from '.';

export default {
  title: 'components/Timer',
  component: Timer,
} as ComponentMeta<typeof Timer>;

const Template: ComponentStory<typeof Timer> = (args) => <Timer {...args} />;

export const Primary = Template.bind({});
