import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['legalName']),

  uri: attr(),
  legalName: attr('language-string-set'),
  registration: belongsTo('registration', { inverse: null }),
  authoredRatings: hasMany('rating', { inverse: null }),
  authoredQualityLabels: hasMany('quality-label', { inverse: 'author' }),
  issuedIdentifiers: hasMany('identifier', { inverse: 'creator' }),

  rdfaBindings: {
    class: "regorg:RegisteredOrganization",
    legalName: "regorg:legalName",
    registration: "regorg:registration"
  }
});
