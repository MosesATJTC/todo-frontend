import React from 'react';
import ButtonInput from './button';
import { Story } from '@storybook/react';

type ButtonProps = {
  text: string;
  isDisabled: boolean;
  onClick: () => void;
};

const Template: Story<ButtonProps> = (args) => <ButtonInput {...args} />;

export const LogInButton = Template.bind({});
LogInButton.args = {
  text: 'Log In',
  isDisabled: false,
  onClick: () => {},
};

export const LogOutButton = Template.bind({});
LogOutButton.args = {
  isDisabled: false,
  text: 'Log Out',
  onClick: () => {},
};

export default {
  title: 'Button',
  component: ButtonInput,
};
