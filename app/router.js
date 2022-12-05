import EmberRouter from '@ember/routing/router';
import config from 'frontend-tvl-subject-pages/config/environment';
import metisFallbackRoute from 'metis/utils/fallback-route';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  metisFallbackRoute(this);
  this.route('sparql');
});
