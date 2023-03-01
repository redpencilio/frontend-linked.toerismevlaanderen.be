import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class DatasetsRoute extends Route {
  @service store;

  async model() {
    const datasets = await this.store.query('dataset', {
      page: { size: 1 },
      sort: '-modified',
      include: 'distributions',
    });
    return datasets[0];
  }
}
