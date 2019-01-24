import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['id']),

  uri: attr(),
  identifier: belongsTo('identifier', { inverse: null }),
  registrationStatus: belongsTo('registration-status', { inverse: null }),
  type: belongsTo('registration-lodging-type', { inverse: null }),
  lodging: belongsTo('lodging', { inverse: null }),
  responsibleOrganization: belongsTo('registered-organization', { inverse: null }),

  rdfaBindings: Object.freeze({
    class: "logies:Registratie",
    identifier: "adms:identifier",
    registrationStatus: "logies:registratieStatus",
    type: "dct:type",
    responsibleOrganization: "logies:verantwoordelijkeOrganisatie"
  })
});
