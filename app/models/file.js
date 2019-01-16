import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { computed } from '@ember/object';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  filename: attr(),
  format: attr(),
  size: attr(),
  extension: attr('string', { defaultValue: 'n/a' }),
  created: attr('datetime'),
  modified: attr('datetime'),
  dataDumps: hasMany('data-dump'),

  miniatureMetadata: computed('extension', function() {
    return `${this.extension.toUpperCase()}`;
  })
});
