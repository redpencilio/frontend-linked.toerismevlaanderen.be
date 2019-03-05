import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['id']),

  uri: attr(),
  isSpecialisationInTimeOf: belongsTo('registration', { inverse: null }),
  generation: belongsTo('generation', { inverse: null }),
  invalidation: belongsTo('invalidation', { inverse: null }),
  identifier: belongsTo('identifier', { inverse: null }),
  registrationStatus: belongsTo('concept', { inverse: null }),
  type: belongsTo('concept', { inverse: null }),
  category: belongsTo('concept', { inverse: null }),
  lodging: belongsTo('lodging', { inverse: null }),
  responsibleOrganization: belongsTo('registered-organization', { inverse: null }),
  specialisationsInTime: hasMany('registration', { inverse: null }),

  rdfaBindings: Object.freeze({
    class: "logies:Registratie",
    identifier: "adms:identifier",
    isSpecialisationInTimeOf: "generiek:isTijdspecialisatieVan",
    generation: "prov:qualifiedGeneration",
    invalidation: "prov:qualifiedInvalidation",
    registrationStatus: "logies:registratieStatus",
    type: "dct:type",
    category: "ext:tvlCategory",
    responsibleOrganization: "logies:verantwoordelijkeOrganisatie"
  })
});
