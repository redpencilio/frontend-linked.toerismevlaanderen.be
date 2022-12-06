import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class DatasetsRoute extends Route {
  @service store;

  async model() {
    const dumps = await this.store.query('data-dump', {
      page: { size: 1 },
      sort: '-created',
      'filter[:exact:title]': 'Logies',
    });
    return dumps[0];
  }
}
