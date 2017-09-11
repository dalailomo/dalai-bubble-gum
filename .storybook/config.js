import { configure } from '@storybook/react';

function loadStories() {
  require('../src/stories/buttons');
}

configure(loadStories, module);
