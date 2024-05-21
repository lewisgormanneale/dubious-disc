import { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

export default {
  title: 'Shared/Button',
  component: ButtonComponent,
  argTypes: {
    appearance: {
      options: ['primary', 'secondary', 'outline'],
      control: { type: 'radio' },
    },
    as: {
      options: ['button', 'a'],
      control: { type: 'radio' },
    },
  },
  tags: ['autodocs'],
} as Meta;

type Story = StoryObj<ButtonComponent>;

export const Default: Story = {
  render: (args: any) => ({
    template: `<dd-button [appearance]="'${args.appearance}'" [as]="'${args.as}'">Default</dd-button>`,
  }),
};

export const Primary: Story = {
  args: {
    appearance: 'primary',
  },
  render: (args: any) => ({
    template: `<dd-button [appearance]="'${args.appearance}'" [as]="'${args.as}'">Primary</dd-button>`,
  }),
};

export const Secondary: Story = {
  args: {
    appearance: 'secondary',
  },
  render: (args: any) => ({
    template: `<dd-button [appearance]="'${args.appearance}'" [as]="'${args.as}'">Secondary</dd-button>`,
  }),
};

export const Outline: Story = {
  args: {
    appearance: 'outline',
  },
  render: (args: any) => ({
    template: `<dd-button [appearance]="'${args.appearance}'" [as]="'${args.as}'">Outline</dd-button>`,
  }),
};
