import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    async download(dump) {
      const file = await dump.file;
      window.location = `/files/${file.get('id')}/download?name=${file.get('filename')}`;
    }
  }
});
