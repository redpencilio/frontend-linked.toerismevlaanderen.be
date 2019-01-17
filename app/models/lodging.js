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
  identifier: belongsTo('identifier', { inverse: 'lodging' }),
  welcomeLocations: belongsTo('point', { inverse: 'isWelcomeAddressOf' }),
  belongsToTouristicRegions: hasMany('touristic-region', { inverse: 'containsLodgings' }),
  capacities: hasMany('quantitative-value', { inverse: 'isCapacityOf' }),
  alternativeExploitations: hasMany('lodging', { inverse: 'isAlternativeExploitationOf' }),
  isAlternativeExploitationOf: hasMany('lodging', { inverse: 'alternativeExploitations' }),
  qualityLabels: hasMany('quality-label', { inverse: 'lodgings' }),
  officialRatings: hasMany('rating', { inverse: 'lodging' }),
  registrations: hasMany('registration', { inverse: 'lodging' }),
  rentalUnits: hasMany('rental-unit', { inverse: 'lodgings' }),
  contactPoints: hasMany('contact-point', { inverse: 'lodging' }),
  welcomeAddresses: hasMany('address', { inverse: 'lodging' }),

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
    alternativeExploitations: "logies:heeftAlternatieveUitbating",
    qualityLabels: "logies:heeftKwaliteitslabel",
    officialRatings: "schema:starRating",
    registrations: "logies:heeftRegistratie",
    rentalUnits: "logies:heeftVerhuureenheid",
    contactPoints: "schema:contactPoint",
    welcomeAddresses: "logies:onthaalAdres"
  }
});
