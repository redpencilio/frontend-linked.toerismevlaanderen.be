'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    sassOptions: {
      includePaths: ['node_modules/@appuniversum/ember-appuniversum'],
    },
    '@appuniversum/ember-appuniversum': {
      disableWormholeElement: true,
    },
  });

  app.import('node_modules/highlight.js/styles/default.min.css');
  app.import('node_modules/@triply/yasgui/build/yasgui.min.css');

  return app.toTree();
};
