import { configure } from '@storybook/angular';

// automatically import all files ending in *.stories.ts
// configure(require.context('../libs', true, /\.stories\.ts$/), module);

const req = require.context('../libs', true, /\.stories\.ts$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
