import { StoryObj, Meta, moduleMetadata } from '@storybook/angular';
import { CardComponent } from './card.component';
import { CardHeaderComponent } from '../card-header/card-header.component';

const meta: Meta<CardComponent> = {
  title: 'Shared/Card',
  component: CardComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
      declarations: [CardComponent, CardHeaderComponent],
      imports: [],
    }),
  ],
};

export default meta;

type Story = StoryObj<CardComponent>;

export const Default: Story = {
  args: {
    title: 'Card Title',
  },
  render: (args: any) => ({
    template: `<dd-card [title]="'${args.title}'"><p class="flex justify-center items-center px-4 py-12 text-sm">Inner Content</p></dd-card>`,
  }),
};
