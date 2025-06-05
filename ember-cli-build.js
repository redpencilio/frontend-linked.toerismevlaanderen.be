'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    '@appuniversum/ember-appuniversum': {
      disableInternalAuContentUsage: true,
      dutchDatePickerLocalization: true,
    },
    sassOptions: {
      includePaths: ['node_modules/@appuniversum/ember-appuniversum'],
    },
    emberData: {
      deprecations: {
        DEPRECATE_STORE_EXTENDS_EMBER_OBJECT: false
      }
    },
  });

  app.import('node_modules/highlight.js/styles/default.min.css');
  app.import('node_modules/@triply/yasgui/build/yasgui.min.css');

  return app.toTree();
};
