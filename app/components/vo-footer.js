import Component from '@ember/component';

export default Component.extend({
  tagName: '',
  isExpanded: false,

  actions: {
    toggleExpanded() {
      this.set('isExpanded', !this.isExpanded);
    }
  }
});
