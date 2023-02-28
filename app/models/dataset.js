import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class Dataset extends Model {
  @attr title;
  @attr description;
  @attr('datetime') created;
  @attr('datetime') modified;

  @belongsTo('concept', { inverse: 'datasets', async: true }) type;
  @hasMany('file', { inverse: 'datasets', async: true }) distributions;
}
