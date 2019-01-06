import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['id', 'description']),

  uri: attr(),
  description: attr('language-string-set'),
  locatorDesignator: belongsTo('locator-designator', { inverse: null }),
  rentalUnit: belongsTo('rental-unit', { inverse: 'rooms' }),
  type: belongsTo('room-type', { inverse: null }),
  facilities: hasMany('facility', { inverse: null }),

  rdfaBindings: {
    class: "logies:Ruimte",
    description: "schema:description",
    locatorDesignator: "logies:locatieaanduiding",
    type: "dct:type",
    facilities: "schema:amenityFeature"
  }
});
