import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['id', 'timestamp']),

  uri: attr(),
  timestamp: attr('datetime'),
  registration: belongsTo('registration', { inverse: null }),

  rdfaBindings: Object.freeze({
    class: "prov:Generation",
    timestamp: "prov:atTime"
  })
});
