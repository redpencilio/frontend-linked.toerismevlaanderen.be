import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['name']),

  uri: attr(),
  name: attr('language-string-set'),
  alternativeName: attr('language-string-set'),
  numberOfSleepingPlaces: attr(),
  numberOfRentalUnits: attr(),
  identifier: belongsTo('identifier', { inverse: null }),
  welcomeLocation: belongsTo('point', { inverse: null }),
  welcomeAddresses: hasMany('address', { inverse: null }),
  belongsToTouristicRegions: hasMany('touristic-region', { inverse: null }),
  contactPoints: hasMany('contact-point', { inverse: null }),
  capacities: hasMany('quantitative-value', { inverse: null }),
  alternativeExploitations: hasMany('lodging', { inverse: null }),
  isAlternativeExploitationOf: hasMany('lodging', { inverse: null }),
  registrations: hasMany('registration', { inverse: null }),
  officialRatings: hasMany('rating', { inverse: null }),
  qualityLabels: hasMany('quality-label', { inverse: null }),
  descriptions: hasMany('description', { inverse: null }),
  media: hasMany('media-object', { inverse: null }),

  rdfaBindings: Object.freeze({
    class: "logies:Logies",
    name: "schema:name",
    alternativeName: "schema:alternativeName",
    numberOfSleepingPlaces: "logies:aantalSlaapplaatsen",
    numberOfRentalUnits: "logies:aantalVerhuureenheden",
    identifier: "adms:identifier",
    welcomeLocation: "logies:onthaalLocatie",
    welcomeAddresses: "logies:onthaalAdres",
    belongsToTouristicRegions: "logies:behoortTotToeristischeRegio",
    contactPoints: "schema:contactPoint",
    capacities: "logies:capaciteit",
    alternativeExploitations: "logies:heeftAlternatieveUitbating",
    registrations: "logies:heeftRegistratie",
    officialRatings: "schema:starRating",
    qualityLabels: "logies:heeftKwaliteitslabel",
    descriptions: "logies:heeftBeschrijving",
    media: "logies:heeftMedia"
  })
});
