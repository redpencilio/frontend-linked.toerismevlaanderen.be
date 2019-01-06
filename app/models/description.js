import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['id', 'text', 'modifiedOn', 'name', 'publicationDate']),

  uri: attr(),
  text: attr('language-string-set'),
  modifiedOn: attr('datetime'),
  name: attr('language-string-set'),
  publicationDate: attr('datetime'),
  exampleOf: belongsTo('creative-work', { inverse: null }),
  translationOf: belongsTo('creative-work', { inverse: null }),
  license: belongsTo('license', { inverse: null }),
  audience: belongsTo('audience', { inverse: null }),
  examples: hasMany('creative-work', { inverse: null }),
  translations: hasMany('creative-work', { inverse: null }),

  rdfaBindings: {
    class: "logies:Beschrijving",
    text: "schema:value",
    modifiedOn: "schema:dateModified",
    name: "schema:name",
    publicationDate: "schema:datePublished",
    exampleOf: "schema:exampleOfWork",
    translationOf: "schema:translationOfWork",
    license: "schema:license",
    audience: "schema:audience"
  }
});
