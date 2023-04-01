// Button.stories.ts|tsx

import React from 'react';
import { Text } from 'react-native';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '/components/Button';
import { Typography } from '/components/Typography';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = () => <Button>Primary</Button>;

export const Secondary: ComponentStory<typeof Button> = () => <Button variant='secondary'>Secondary</Button>;