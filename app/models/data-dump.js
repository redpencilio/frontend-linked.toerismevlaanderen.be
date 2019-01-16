import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  title: attr(),
  description: attr(),
  created: attr('datetime'),
  modified: attr('datetime'),
  file: belongsTo('file')
});
