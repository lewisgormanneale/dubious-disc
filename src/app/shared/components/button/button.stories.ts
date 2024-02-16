import { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

export default {
  title: 'Shared/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    primary: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
  },
  args: {
    primary: true,
    label: 'Primary',
  },
} as Meta;

type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Primary',
  },
};

export const Secondary: Story = {
  args: {
    primary: false,
    label: 'Secondary',
  },
};
