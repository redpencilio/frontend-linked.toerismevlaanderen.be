import Route from '@ember/routing/route';
import DataTableRouteMixin from 'ember-data-table/mixins/route';

export default Route.extend(DataTableRouteMixin,{
  modelName: 'concept',
  mergeQueryOptions() {
    return {
      'filter[concept-schemes][:id:]': 'd59411cd-6d71-44d9-a0b3-cf958d89858d'
    };
  }
});
