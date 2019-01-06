import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['id', 'description', 'label', 'issuedDate']),

  uri: attr(),
  description: attr('language-string-set'),
  label: attr('language-string-set'),
  issuedDate: attr('datetime'),
  author: belongsTo('registered-organization', { inverse: null }),

  rdfaBindings: {
    class: "logies:Kwaliteitslabel",
    description: "schema:description",
    label: "skos:prefLabel",
    issuedDate: "dct:issued",
    author: "schema:author"
  }
});
