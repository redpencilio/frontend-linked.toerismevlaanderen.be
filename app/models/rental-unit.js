import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['id', 'numberOfRooms', 'numberOfSleepingPlaces', 'name']),

  uri: attr(),
  numberOfRooms: attr(),
  numberOfSleepingPlaces: attr(),
  name: attr('language-string-set'),
  location: belongsTo('geometry', { inverse: null }),
  facilities: hasMany('facility', { inverse: null }),
  rooms: hasMany('room', { inverse: 'rentalUnit' }),
  capacities: hasMany('quantitative-value', { inverse: null }),

  rdfaBindings: {
    class: "logies:Verhuureenheid",
    numberOfRooms: "schema:numberOfRooms",
    numberOfSleepingPlaces: "logies:aantalSlaapplaatsen",
    name: "schema:name",
    location: "logies:locatie",
    facilities: "schema:amenityFeature",
    rooms: "logies:heeftKamer",
    capacities: "logies:capaciteit"
  }
});
