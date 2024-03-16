import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { NgIconsModule } from '@ng-icons/core';
import { heroUserCircleSolid } from '@ng-icons/heroicons/solid';
import { CompoundButtonComponent } from './compound-button.component';

export default {
  title: 'Shared/Button/CompoundButton',
  component: CompoundButtonComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      declarations: [CompoundButtonComponent],
      imports: [
        NgIconsModule.withIcons({
          heroUserCircleSolid,
        }),
      ],
    }),
  ],
} as Meta;

type Story = StoryObj<CompoundButtonComponent>;
