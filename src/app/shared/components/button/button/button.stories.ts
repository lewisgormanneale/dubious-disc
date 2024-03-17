import { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

export default {
  title: 'Shared/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
} as Meta;

type Story = StoryObj<ButtonComponent>;

export const Default: Story = {
  render: () => ({
    template: `<dd-button>Default</dd-button>`,
  }),
};

export const Primary: Story = {
  args: {
    appearance: 'primary',
  },
  render: (args: any) => ({
    template: `<dd-button [appearance]="'${args.appearance}'">Primary</dd-button>`,
  }),
};

export const Secondary: Story = {
  args: {
    appearance: 'secondary',
  },
  render: (args: any) => ({
    template: `<dd-button [appearance]="'${args.appearance}'">Secondary</dd-button>`,
  }),
};

export const Outline: Story = {
  args: {
    appearance: 'outline',
  },
  render: (args: any) => ({
    template: `<dd-button [appearance]="'${args.appearance}'">Outline</dd-button>`,
  }),
};
