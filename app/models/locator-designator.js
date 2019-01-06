import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['id', 'designator']),

  uri: attr(),
  designator: attr(),
  type: belongsTo('locator-designator-type', { inverse: null }),

  rdfaBindings: {
    class: "adres:Locatieaanduiding",
    designator: "adres:Locatieaanduiding.aanduiding",
    type: "adres:Locatieaanduiding.type"
  }
});
