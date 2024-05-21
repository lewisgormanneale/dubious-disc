import type { Meta, StoryObj } from '@storybook/angular';
import { TableComponent } from './table.component';

export default {
  title: 'Shared/Table',
  component: TableComponent,
  argTypes: {
    showTableHeaders: {
      control: { type: 'boolean' },
    },
  },
  tags: ['autodocs'],
} as Meta;

type Story = StoryObj<TableComponent>;

export const ExampleMoveTable: Story = {
  args: {
    showTableHeaders: true,
    columns: [
      {
        label: 'Level',
        property: 'level',
      },
      {
        label: 'Move',
        property: 'move',
      },
      {
        label: 'Type',
        property: 'type',
      },
    ],
  },
};
