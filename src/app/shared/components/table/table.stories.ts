import type { Meta, StoryObj } from '@storybook/angular';
import { TableComponent } from './table.component';

export default {
  title: 'Shared/Table',
  component: TableComponent,
  tags: ['autodocs'],
} as Meta;

type Story = StoryObj<TableComponent>;

export const Default: Story = {
  args: {},
};
