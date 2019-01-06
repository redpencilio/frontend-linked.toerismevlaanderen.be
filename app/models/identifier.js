import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['id', 'notation', 'issuedBy', 'issuedDate']),

  uri: attr(),
  notation: attr(),
  issuedBy: attr(),
  issuedDate: attr('datetime'),
  creator: belongsTo('agent', { inverse: null }),

  rdfaBindings: {
    class: "adms:Identifier",
    notation: "skos:notation",
    issuedBy: "adms:schemaAgency",
    issuedDate: "dct:issued",
    creator: "dct:creator"
  }
});
