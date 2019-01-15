import { inject } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  router: inject(),
  model( { wildcard } ){
    const targetPath = `/doc/${wildcard}`;
    this.transitionTo( targetPath );
  }
});
