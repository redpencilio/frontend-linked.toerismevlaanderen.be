import { module, test } from 'qunit';
import { setupTest } from 'frontend-tvl-subject-pages/tests/helpers';

module('Unit | Model | file', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('file', {});
    assert.ok(model);
  });
});
