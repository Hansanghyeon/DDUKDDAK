import { ComponentStory, ComponentMeta } from '@storybook/react';

import ToggleMode from '.';

export default {
  title: 'components/toggle/Mode',
  component: ToggleMode,
} as ComponentMeta<typeof ToggleMode>;

const Template: ComponentStory<typeof ToggleMode> = (args) => <ToggleMode {...args} />;

export const Primary = Template.bind({});
