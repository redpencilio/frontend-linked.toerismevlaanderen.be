import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['id', 'honorificPrefix', 'email', 'fax', 'name', 'page', 'telephone']),

  uri: attr(),
  honorificPrefix: attr('language-string-set'),
  email: attr(),
  fax: attr(),
  name: attr(),
  page: attr(),
  telephone: attr(),

  rdfaBindings: {
    class: "schema:ContactPoint",
    honorificPrefix: "vcard:honorific-prefix",
    email: "schema:email",
    fax: "schema:faxNumber",
    name: "foaf:name",
    page: "foaf:page",
    telephone: "schema:telephone"
  }
});
