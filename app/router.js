import EmberRouter from '@ember/routing/router';
import config from 'frontend-tvl-subject-pages/config/environment';
import { fallbackRoute, externalRoute } from 'ember-metis';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('login');
  this.route('sparql');
  this.route('datasets');
  this.route('attractions');
  this.route('examples');
  this.route('docs', function () {
    this.route('model');
  });
  externalRoute(this);
  fallbackRoute(this);
});
