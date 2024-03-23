import type { Preview, AngularRenderer } from '@storybook/angular';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import { withThemeByClassName } from '@storybook/addon-themes';
import docJson from '../documentation.json';
import '../src/index.css';
setCompodocJson(docJson);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeByClassName<AngularRenderer>({
      themes: {
        Light: '',
        Dark: 'dark',
      },
      defaultTheme: 'Light',
    }),
  ],
};

export default preview;
