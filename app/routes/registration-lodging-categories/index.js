import Route from '@ember/routing/route';
import DataTableRouteMixin from 'ember-data-table/mixins/route';

export default Route.extend(DataTableRouteMixin,{
  modelName: 'concept',
  mergeQueryOptions() {
    return {
      'filter[concept-schemes][:id:]': '9d6a2610-5e27-4a26-93c8-d4a21e1e90e5'
    };
  }
});
