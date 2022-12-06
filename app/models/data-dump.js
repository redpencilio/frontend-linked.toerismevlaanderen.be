import Model, { attr, belongsTo } from '@ember-data/model';

export default class DataDumpModel extends Model {
  @attr title;
  @attr description;
  @attr('datetime') created;
  @attr('datetime') modified;

  @belongsTo('file', { inverse: 'dataDumps' }) file;
}
