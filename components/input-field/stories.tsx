import React from 'react';
import InputField from './input';
import { Story } from '@storybook/react';

type InputProps = {
  name: string;
  label: string;
  type: string;
  onChange: () => void;
  onBlur: () => void;
  value: string;
};

const Template: Story<InputProps> = (args) => <InputField {...args} />;

export const InputStoryEmail = Template.bind({});
InputStoryEmail.args = {
  name: 'email',
  label: 'Email',
  type: 'email',
};

export const InputStoryPassword = Template.bind({});
InputStoryPassword.args = {
  name: 'password',
  label: 'Password',
  type: 'password',
};

export default {
  title: 'Input Field',
  component: InputField,
};
