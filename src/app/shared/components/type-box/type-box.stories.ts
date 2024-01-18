import type { Meta, StoryObj } from '@storybook/angular';

import { TypeBoxComponent } from './type-box.component';

const meta: Meta<TypeBoxComponent> = {
  title: 'Shared/Type Box',
  component: TypeBoxComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<TypeBoxComponent>;

export const Fire: Story = {
  args: {
    type: {
      damage_class_id: 1,
      generation_id: 1,
      id: 1,
      identifier: 'fire',
      name: 'Fire',
      type_color: 'ff4422',
    },
  },
};
