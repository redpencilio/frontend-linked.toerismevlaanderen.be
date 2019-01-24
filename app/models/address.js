import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['thoroughfare', 'houseNumber', 'houseNumberSuffix', 'postCode', 'municipality', 'country']),

  uri: attr(),
  houseNumberSuffix: attr(),
  municipality: attr('language-string-set'),
  houseNumber: attr(),
  country: attr('language-string-set'),
  postCode: attr(),
  thoroughfare: attr(),
  lodging: belongsTo('lodging', { inverse: null }),

    rdfaBindings: Object.freeze({
    class: "locn:Address",
    houseNumberSuffix: "adres:Adresvoorstelling.busnummer",
    municipality: "adres:gemeentenaam",
    houseNumber: "adres:Adresvoorstelling.huisnummer",
    country: "adres:land",
    postCode: "locn:postCode",
    thoroughfare: "locn:thoroughfare"
    })
});
