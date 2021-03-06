import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['label']),

  uri: attr(),
  label: attr('language-string-set'),
  registration: belongsTo('registration', { inverse: null }),
  registrationPublicationType: belongsTo('registration-publication-lodging-type', { inverse: null }),

  rdfaBindings: Object.freeze({
    class: "skos:Concept",
    label: "skos:prefLabel",
    registrationPublicationType: "skos:broadMatch"
  })
});
