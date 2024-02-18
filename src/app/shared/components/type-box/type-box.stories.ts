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

export const Normal: Story = {
  args: {
    type: {
      name: 'Normal',
      type_color: 'AAAA99',
    } as Tables<'types'>,
  },
};
