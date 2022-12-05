import { module, test } from 'qunit';
import { setupTest } from 'frontend-tvl-subject-pages/tests/helpers';

module('Unit | Controller | sparql', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:sparql');
    assert.ok(controller);
  });
});
