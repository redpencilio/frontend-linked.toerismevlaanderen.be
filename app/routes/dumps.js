import Route from '@ember/routing/route';

export default Route.extend({
  async model() {
    const dumps = await this.store.query('data-dump', {
      page: { size: 1 },
      sort: '-created',
      'filter[:exact:title]': 'Logies'
    });
    return dumps.firstObject;
  }
});
