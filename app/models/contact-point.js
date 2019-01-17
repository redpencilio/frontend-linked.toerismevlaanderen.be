import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['id', 'email', 'page', 'telephone']),

  uri: attr(),
  email: attr(),
  page: attr(),
  telephone: attr(),
  lodging: belongsTo('lodging', { inverse: 'contactPoints' }),

  rdfaBindings: {
    class: "schema:ContactPoint",
    email: "schema:email",
    page: "foaf:page",
    telephone: "schema:telephone"
  }
});
