import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class DatasetsRoute extends Route {
  @service store;

  async model() {
    const datasetTypes = await this.store.query('concept', {
      sort: 'label',
      'filter[concept-schemes][:uri:]':
        'http://themis.vlaanderen.be/id/concept-scheme/a76297cd-ba80-468c-bc18-4b9e1117eee9',
    });

    // Get the latest version for each dataset type
    const datasets = (
      await Promise.all(
        datasetTypes.toArray().map(async (datasetType) => {
          return (
            await Promise.all(
              ['ttl', 'csv'].map(async (extension) => {
                const datasets = await this.store.query('dataset', {
                  page: { size: 1 },
                  sort: '-modified',
                  include: 'distributions',
                  'filter[type][:uri:]': datasetType.uri,
                  'filter[distributions][extension]': extension,
                });
                return datasets[0];
              })
            )
          ).flat();
        })
      )
    ).flat();

    return datasets
      .filter((d) => d)
      .sortBy('modified')
      .reverse();
  }
}
