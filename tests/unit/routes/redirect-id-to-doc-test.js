import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | redirect-id-to-doc', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:redirect-id-to-doc');
    assert.ok(route);
  });
});
