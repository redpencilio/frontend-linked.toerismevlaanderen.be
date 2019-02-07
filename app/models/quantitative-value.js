import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { computed } from '@ember/object';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: computed('unit', 'value', function() {
    return `${this.unit}: ${this.value}`;
  }),


  uri: attr(),
  unit: attr('language-string-set'),
  value: attr(),
  isCapacityOf: belongsTo('lodging', { inverse: null }),

  rdfaBindings: Object.freeze({
    class: "schema:QuantitativeValue",
    unit: "schema:unitText",
    value: "schema:value"
  })
});
