import Route from '@ember/routing/route';
import DataTableRouteMixin from 'ember-data-table/mixins/route';

export default Route.extend(DataTableRouteMixin,{
  modelName: 'concept',
  mergeQueryOptions() {
    return {
      'filter[concept-schemes][:id:]': '48c5b233-44bc-49d1-93a7-b5005586baa2'
    };
  }
});
