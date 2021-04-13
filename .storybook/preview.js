/*
* Use preview.js for global code (such as CSS imports or JavaScript mocks) that applies to all stories.
* https://storybook.js.org/docs/react/configure/overview#configure-story-rendering
*/

import '../public/shared/temperate.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}