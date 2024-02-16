import { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

export default {
  title: 'Shared/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  template: `
  <dd-button>
  This is a template button.
  </dd-button>
  `,
  argTypes: {
    primary: {
      control: 'boolean',
    },
  },
  args: {
    primary: true,
  },
} as Meta;

type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};

export const Secondary: Story = {
  args: {
    primary: false,
  },
};
