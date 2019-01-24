import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['id', 'ratingValue', 'bestRating', 'worstRating']),

  uri: attr(),
  ratingValue: attr(),
  bestRating: attr(),
  worstRating: attr(),
  author: belongsTo('registered-organization', { inverse: null }),
  lodging: belongsTo('lodging', { inverse: null }),

  rdfaBindings: Object.freeze({
    class: "schema:Rating",
    ratingValue: "schema:ratingValue",
    bestRating: "schema:bestRating",
    worstRating: "schema:worstRating",
    author: "schema:author"
  })
});
