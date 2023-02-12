import Model, { attr } from '@ember-data/model';

export default class TouristAttractionModel extends Model {
  @attr uri;
  @attr('language-string-set') name;
  @attr('language-string-set') alternativeName;
}
