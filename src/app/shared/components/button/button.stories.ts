import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import { NgIconsModule } from '@ng-icons/core';
import { heroUserCircleSolid } from '@ng-icons/heroicons/solid';

export default {
  title: 'Shared/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      declarations: [ButtonComponent],
      imports: [
        NgIconsModule.withIcons({
          heroUserCircleSolid,
        }),
      ],
    }),
  ],
} as Meta;

type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {
    primary: true,
  },
  render: (args: any) => ({
    template: `<dd-button [primary]=${args.primary}>Primary</dd-button>`,
  }),
};

export const Secondary: Story = {
  args: {
    primary: false,
  },
  render: (args: any) => ({
    template: `<dd-button [primary]=${args.primary}>Secondary</dd-button>`,
  }),
};

export const Icon: Story = {
  args: {
    primary: false,
  },
  render: (args: any) => ({
    template: `<dd-button [primary]=${args.primary}><ng-icon [name]="'heroUserCircleSolid'"></ng-icon></dd-button>`,
  }),
};
