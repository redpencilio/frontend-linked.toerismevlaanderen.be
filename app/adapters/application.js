import { inject as service } from '@ember/service';
import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
  @service fastboot;

  constructor() {
    super(...arguments);
    if (this.fastboot.isFastBoot) this.host = window.BACKEND_URL;
  }
}
