import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['id', 'ratingValue', 'description', 'bestRating', 'worstRating', 'issuedDate']),

  uri: attr(),
  ratingValue: attr(),
  description: attr('language-string-set'),
  bestRating: attr(),
  worstRating: attr(),
  issuedDate: attr('datetime'),
  author: belongsTo('registered-organization', { inverse: null }),

  rdfaBindings: {
    class: "schema:Rating",
    ratingValue: "schema:ratingValue",
    description: "schema:description",
    bestRating: "schema:bestRating",
    worstRating: "schema:worstRating",
    issuedDate: "dct:issued",
    author: "schema:author"
  }
});
