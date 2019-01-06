import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['id', 'adminUnitLevel1', 'adminUnitLevel2', 'addressArea', 'houseNumberSuffix', 'municipality', 'houseNumber', 'country', 'locatorDesignator', 'locatorName', 'poBox', 'postCode', 'postName', 'thoroughfare', 'references', 'fullAddress']),

  uri: attr(),
  adminUnitLevel1: attr('language-string-set'),
  adminUnitLevel2: attr('language-string-set'),
  addressArea: attr('language-string-set'),
  houseNumberSuffix: attr(),
  municipality: attr('language-string-set'),
  houseNumber: attr(),
  country: attr('language-string-set'),
  locatorDesignator: attr(),
  locatorName: attr('language-string-set'),
  poBox: attr(),
  postCode: attr(),
  postName: attr(),
  thoroughfare: attr(),
  references: attr(),
  fullAddress: attr('language-string-set'),

  rdfaBindings: {
    class: "locn:Address",
    adminUnitLevel1: "locn:adminUnitL1",
    adminUnitLevel2: "locn:adminUnitL2",
    addressArea: "locn:addressArea",
    houseNumberSuffix: "adres:Adresvoorstelling.busnummer",
    municipality: "adres:gemeentenaam",
    houseNumber: "adres:Adresvoorstelling.huisnummer",
    country: "adres:land",
    locatorDesignator: "locn:locatorDesignator",
    locatorName: "locn:locatorName",
    poBox: "locn:poBox",
    postCode: "locn:postCode",
    postName: "locn:postName",
    thoroughfare: "locn:thoroughfare",
    references: "adres:verwijstNaar",
    fullAddress: "locn:fullAddress"
  }
});
