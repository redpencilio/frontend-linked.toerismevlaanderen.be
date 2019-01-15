import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['id', 'numberOfSleepingPlaces', 'numberOfRentalUnits', 'alternativeName', 'name']),

  uri: attr(),
  numberOfSleepingPlaces: attr(),
  numberOfRentalUnits: attr(),
  alternativeName: attr('language-string-set'),
  name: attr('language-string-set'),
  identifier: belongsTo('identifier', { inverse: null }),
  welcomeLocations: belongsTo('geometry', { inverse: null }),
  belongsToTouristicRegions: hasMany('touristic-region', { inverse: null }),
  capacities: hasMany('quantitative-value', { inverse: null }),
  audiences: hasMany('audience', { inverse: null }),
  alternativeExploitations: hasMany('lodging', { inverse: null }),
  descriptions: hasMany('description', { inverse: null }),
  facilities: hasMany('facility', { inverse: null }),
  qualityLabels: hasMany('quality-label', { inverse: null }),
  media: hasMany('media-object', { inverse: null }),
  officialRatings: hasMany('rating', { inverse: null }),
  registrations: hasMany('registration', { inverse: null }),
  rentalUnits: hasMany('rental-unit', { inverse: null }),
  contactPoints: hasMany('contact-point', { inverse: null }),
  welcomeAddresses: hasMany('address', { inverse: null }),

  rdfaBindings: {
    class: "logies:Logies",
    numberOfSleepingPlaces: "logies:aantalSlaapplaatsen",
    numberOfRentalUnits: "logies:aantalVerhuureenheden",
    alternativeName: "schema:alternativeName",
    name: "schema:name",
    identifier: "adms:identifier",
    welcomeLocations: "logies:onthaalLocatie",
    belongsToTouristicRegions: "logies:behoortTotToeristischeRegio",
    capacities: "logies:capaciteit",
    audiences: "schema:audience",
    alternativeExploitations: "logies:heeftAlternatieveUitbating",
    descriptions: "logies:heeftBeschrijving",
    facilities: "schema:amenityFeature",
    qualityLabels: "logies:heeftKwaliteitslabel",
    media: "logies:heeftMedia",
    officialRatings: "schema:starRating",
    registrations: "logies:heeftRegistratie",
    rentalUnits: "logies:heeftVerhuureenheid",
    contactPoints: "schema:contactPoint",
    welcomeAddresses: "logies:onthaalAdres"
  }
});
