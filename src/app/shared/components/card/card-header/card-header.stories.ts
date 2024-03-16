import { StoryObj, Meta, moduleMetadata } from '@storybook/angular';
import { CardHeaderComponent } from './card-header.component';

const meta: Meta<CardHeaderComponent> = {
  title: 'Shared/Card/CardHeader',
  component: CardHeaderComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
      declarations: [CardHeaderComponent],
      imports: [],
    }),
  ],
};

export default meta;

type Story = StoryObj<CardHeaderComponent>;

export const Default: Story = {
  args: {
    title: 'Card Title',
  },
};
