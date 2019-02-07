import Controller from '@ember/controller';
import Swag from 'swagger-ui';

const {
  SwaggerUIBundle,
  SwaggerUIStandalonePreset
} = Swag;

export default Controller.extend({
  swaggerConfig: Object.freeze({
    url: 'assets/openapi.json',
    deepLinking: false,
    presets: [
      SwaggerUIStandalonePreset,
      SwaggerUIBundle.presets.apis,
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout",
    docExpansion: 'list',
    tagsSorter: 'alpha',
    operationsSorter: 'alpha',
    defaultModelsExpandDepth: -1,
    defaultModelExpandDepth: 1
  })
});
