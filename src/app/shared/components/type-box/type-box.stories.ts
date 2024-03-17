import type { Meta, StoryObj } from '@storybook/angular';

import { TypeBoxComponent } from './type-box.component';
import { Tables } from 'src/app/core/models';

const meta: Meta<TypeBoxComponent> = {
  title: 'Shared/Type Box',
  component: TypeBoxComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<TypeBoxComponent>;

export const Default: Story = {
  args: {
    type: {
      name: 'Normal',
      type_color: 'AAAA99',
    } as Tables<'types'>,
  },
};

export const Small: Story = {
  args: {
    type: {
      name: 'Normal',
      type_color: 'AAAA99',
    } as Tables<'types'>,
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    type: {
      name: 'Normal',
      type_color: 'AAAA99',
    } as Tables<'types'>,
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    type: {
      name: 'Normal',
      type_color: 'AAAA99',
    } as Tables<'types'>,
    size: 'lg',
  },
};
