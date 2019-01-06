import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['id', 'legalName', 'legalPersonality', 'legalForm', 'legalStatus']),

  uri: attr(),
  legalName: attr('language-string-set'),
  legalPersonality: attr(),
  legalForm: attr(),
  legalStatus: attr(),
  registration: belongsTo('registration', { inverse: null }),

  rdfaBindings: {
    class: "regorg:RegisteredOrganization",
    legalName: "regorg:legalName",
    legalPersonality: "organisatie:rechtspersoonlijkheid",
    legalForm: "organisatie:rechtsvorm",
    legalStatus: "organisatie:rechtstoestand",
    registration: "regorg:registration"
  }
});
