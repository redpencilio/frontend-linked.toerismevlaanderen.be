import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['id', 'modifiedOn', 'name', 'publicationDate', 'description', 'caption', 'contentUrl', 'exifData', 'thumbnailUrl']),

  uri: attr(),
  modifiedOn: attr('datetime'),
  name: attr('language-string-set'),
  publicationDate: attr('datetime'),
  description: attr('language-string-set'),
  caption: attr('language-string-set'),
  contentUrl: attr(),
  exifData: attr(),
  thumbnailUrl: attr(),
  exampleOf: belongsTo('creative-work', { inverse: 'examples' }),
  translationOf: belongsTo('creative-work', { inverse: 'translations' }),
  license: belongsTo('license', { inverse: null }),
  audience: belongsTo('audience', { inverse: null }),
  format: belongsTo('file-format', { inverse: null }),
  width: belongsTo('quantitative-value', { inverse: null }),
  height: belongsTo('quantitative-value', { inverse: null }),
  location: belongsTo('geometry', { inverse: null }),
  examples: hasMany('creative-work', { inverse: 'exampleOf' }),
  translations: hasMany('creative-work', { inverse: 'translationOf' }),
  languages: hasMany('language', { inverse: null }),

  rdfaBindings: Object.freeze({
    class: "logies:MediaObject",
    modifiedOn: "schema:dateModified",
    name: "schema:name",
    publicationDate: "schema:datePublished",
    description: "schema:description",
    caption: "schema:caption",
    contentUrl: "schema:contentUrl",
    exifData: "schema:exifDate",
    thumbnailUrl: "schema:thumbnailUrl",
    exampleOf: "schema:exampleOfWork",
    translationOf: "schema:translationOfWork",
    license: "schema:license",
    audience: "schema:audience",
    format: "dct:format",
    width: "schema:width",
    height: "schema:height",
    location: "logies:locatie",
    languages: "schema:inLanguage"
  })
});
