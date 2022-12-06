import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class DumpsRoute extends Route {
  @service router;

  beforeModel() {
    this.router.transitionTo('datasets');
  }
}
