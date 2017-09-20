import { configure } from '@storybook/react';

function loadStories() {
  require('../src/stories/buttons');
  require('../src/stories/expander');
}

configure(loadStories, module);
