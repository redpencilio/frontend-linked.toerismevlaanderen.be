import Model, { attr, belongsTo } from '@ember-data/model';

export default class Dataset extends Model {
  @attr title;
  @attr description;
  @attr('datetime') created;
  @attr('datetime') modified;

  @belongsTo('file', { inverse: 'datasets', async: true }) file;
}
