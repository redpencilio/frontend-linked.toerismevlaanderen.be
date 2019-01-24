import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['label']),

  uri: attr(),
  label: attr('language-string-set'),
  containsLodgings: hasMany('lodging', { inverse: 'belongsToTouristicRegions' }),

  rdfaBindings: {
    class: "logies:ToeristischeRegio",
    label: "skos:prefLabel"
  }
});
