import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['id']),

  uri: attr(),
  identifier: belongsTo('identifier', { inverse: 'registration' }),
  registrationStatus: belongsTo('registration-status', { inverse: 'registration' }),
  type: belongsTo('registration-lodging-type', { inverse: 'registration' }),
  lodging: belongsTo('lodging', { inverse: 'registrations' }),

  rdfaBindings: {
    class: "logies:Registratie",
    identifier: "adms:identifier",
    registrationStatus: "logies:registratieStatus",
    type: "dct:type"
  }
});
