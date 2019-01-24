import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { computed } from '@ember/object';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: computed('ratingValue', 'bestRating', 'worstRating', function() {
    let str = this.ratingValue;
    if (this.bestRating && this.worstRating)
      str += ` [${this.worstRating}-${this.bestRating}]`;
    return str;
  }),

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
