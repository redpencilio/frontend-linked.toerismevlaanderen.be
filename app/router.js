import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('route-not-found', {
    path: '/*wildcard'
  });

  this.route('redirect-id-to-doc', {
    path: '/id/*wildcard'
  });

  this.route('ratings', {
    path: '/doc/ratings/'
  }, function() {
    this.route('show', {
      path: ':id'
    });
  });

  this.route('agents', {
    path: '/doc/agents/'
  }, function() {
    this.route('show', {
      path: ':id'
    });
  });

  this.route('registered-organizations', {
    path: '/doc/registered-organizations/'
  }, function() {
    this.route('show', {
      path: ':id'
    });
  });

  this.route('quality-labels', {
    path: '/doc/quality-labels/'
  }, function() {
    this.route('show', {
      path: ':id'
    });
  });

  this.route('lodgings', {
    path: '/doc/lodgings/'
  }, function() {
    this.route('show', {
      path: ':id'
    });
  });

  this.route('registrations', {
    path: '/doc/registrations/'
  }, function() {
    this.route('show', {
      path: ':id'
    });
  });

  this.route('touristic-regions', {
    path: '/doc/touristic-regions/'
  }, function() {
    this.route('show', {
      path: ':id'
    });
  });

  this.route('rental-units', {
    path: '/doc/rental-units/'
  }, function() {
    this.route('show', {
      path: ':id'
    });
  });

  this.route('addresses', {
    path: '/doc/addresses/'
  }, function() {
    this.route('show', {
      path: ':id'
    });
  });

  this.route('contact-points', {
    path: '/doc/contact-points/'
  }, function() {
    this.route('show', {
      path: ':id'
    });
  });

  this.route('identifiers', {
    path: '/doc/identifiers/'
  }, function() {
    this.route('show', {
      path: ':id'
    });
  });

  this.route('quantitative-values', {
    path: '/doc/quantitative-values/'
  }, function() {
    this.route('show', {
      path: ':id'
    });
  });

  this.route('points', {
    path: '/doc/points/'
  }, function() {
    this.route('show', {
      path: ':id'
    });
  });

  this.route('registration-statuses', {
    path: '/doc/registration-statuses/'
  }, function() {
    this.route('show', {
      path: ':id'
    });
  });

  this.route('registration-lodging-types', {
    path: '/doc/registration-lodging-types/'
  }, function() {
    this.route('show', {
      path: ':id'
    });
  });
  this.route('dumps');

  this.route('registration-publication-lodging-types', {
    path: '/doc/registration-publication-lodging-types/'
  }, function() {
    this.route('show', {
      path: ':id'
    });
  });

  this.route('sparql');
});

export default Router;
