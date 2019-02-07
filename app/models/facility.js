import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['name']),

  uri: attr(),
  name: attr('language-string-set'),
  description: attr('language-string-set'),
  isSpecialisationOf: belongsTo('facility', { inverse: null }),
  specialisations: hasMany('facility', { inverse: null }),

  rdfaBindings: Object.freeze({
    class: "logies:Faciliteit",
    name: "schema:name",
    description: "schema:description",
    isSpecialisationOf: "logies:isSpecialisatieVan"
  })
});
