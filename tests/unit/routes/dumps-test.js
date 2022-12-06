import { module, test } from 'qunit';
import { setupTest } from 'frontend-tvl-subject-pages/tests/helpers';

module('Unit | Route | dumps', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:dumps');
    assert.ok(route);
  });
});
