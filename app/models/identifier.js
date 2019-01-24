import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { computed } from '@ember/object';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: computed('notation', 'issuedBy', function() {
    return this.issuedBy ? `${this.notation} (${this.issuedBy})` : this.notation;
  }),

  uri: attr(),
  notation: attr(),
  issuedBy: attr(),
  creator: belongsTo('registered-organization', { inverse: 'issuedIdentifiers' }),
  lodging: belongsTo('lodging', { inverse: 'identifier' }),
  registration: belongsTo('registration', { inverse: 'identifier' }),

  rdfaBindings: {
    class: "adms:Identifier",
    notation: "skos:notation",
    issuedBy: "adms:schemaAgency",
    creator: "dct:creator"
  }
});
