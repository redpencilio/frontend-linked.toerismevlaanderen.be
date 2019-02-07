import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['thoroughfare', 'houseNumber', 'houseNumberSuffix', 'postCode', 'municipality', 'country']),

  uri: attr(),
  thoroughfare: attr(),
  houseNumber: attr(),
  houseNumberSuffix: attr(),
  postCode: attr(),
  municipality: attr('language-string-set'),
  country: attr('language-string-set'),
  lodging: belongsTo('lodging', { inverse: null }),

  rdfaBindings: Object.freeze({
    class: "locn:Address",
    thoroughfare: "locn:thoroughfare",
    houseNumber: "adres:Adresvoorstelling.huisnummer",
    houseNumberSuffix: "adres:Adresvoorstelling.busnummer",
    postCode: "locn:postCode",
    municipality: "adres:gemeentenaam",
    country: "adres:land"
  })
});
