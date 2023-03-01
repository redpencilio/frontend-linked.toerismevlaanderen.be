import Model, { attr, hasMany } from '@ember-data/model';

export default class ConceptModel extends Model {
  @attr label;

  @hasMany('dataset', { inverse: 'type', async: true }) datasets;
}
