import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['id', 'validThrough', 'validFrom', 'description', 'name']),

  uri: attr(),
  validThrough: attr('datetime'),
  validFrom: attr('datetime'),
  description: attr('language-string-set'),
  name: attr('language-string-set'),
  isSpecialisationOf: belongsTo('facility', { inverse: 'specialisations' }),
  specialisations: hasMany('facility', { inverse: 'isSpecialisationOf' }),

  rdfaBindings: {
    class: "logies:Faciliteit",
    validThrough: "schema:validThrough",
    validFrom: "schema:validFrom",
    description: "schema:description",
    name: "schema:name",
    isSpecialisationOf: "logies:isSpecialisatieVan"
  }
});
