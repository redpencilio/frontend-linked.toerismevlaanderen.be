import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['id', 'label']),

  uri: attr(),
  label: attr('language-string-set'),
  author: belongsTo('registered-organization', { inverse: 'authoredQualityLabels' }),
  lodgings: hasMany('lodging', { inverse: 'qualityLabels' }),

  rdfaBindings: {
    class: "logies:Kwaliteitslabel",
    label: "skos:prefLabel",
    author: "schema:author"
  }
});
