import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { collect } from '@ember/object/computed';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: collect.apply(this,['id', 'label']),

  uri: attr(),
  label: attr('language-string-set'),
  conceptSchemes: hasMany('conceptscheme', { inverse: null }),
  topConceptOf: hasMany('conceptscheme', { inverse: null }),
  broaderConcepts: hasMany('concept', { inverse: null }),
  narrowerConcepts: hasMany('concept', { inverse: null }),
  broadMatches: hasMany('concept', { inverse: null }),
  narrowerMatches: hasMany('concept', { inverse: null }),

  rdfaBindings: Object.freeze({
    class: "skos:Concept",
    label: "skos:prefLabel",
    conceptSchemes: "skos:inScheme",
    topConceptOf: "skos:topConceptOf",
    broaderConcepts: "skos:broader",
    broadMatches: "skos:broadMatch"
  })
});
