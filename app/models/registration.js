import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['id']),

  uri: attr(),
  isSpecialisationInTimeOf: belongsTo('registration', { inverse: null }),
  generation: belongsTo('generation', { inverse: null }),
  invalidation: belongsTo('invalidation', { inverse: null }),
  identifier: belongsTo('identifier', { inverse: null }),
  registrationStatus: belongsTo('registration-status', { inverse: null }),
  type: belongsTo('registration-lodging-type', { inverse: null }),

  rdfaBindings: {
    class: "logies:Registratie",
    isSpecialisationInTimeOf: "generiek:isTijdspecialisatieVan",
    generation: "prov:qualifiedGeneration",
    invalidation: "prov:qualifiedInvalidation",
    identifier: "adms:identifier",
    registrationStatus: "logies:registratieStatus",
    type: "dct:type"
  }
});
