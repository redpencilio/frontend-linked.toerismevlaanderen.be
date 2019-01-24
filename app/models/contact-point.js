import attr from 'ember-data/attr';
import Model from 'ember-data/model';
import { computed } from '@ember/object';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  // A string representation of this model, based on its attributes.
  // This is what mu-cl-resources uses to search on, and how the model will be presented while editing relationships.
  stringRep: computed('email', 'page', 'telephone', function() {
    return [this.email, this.page, this.telephone].filter(x => x).join(', ');
  }),

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
