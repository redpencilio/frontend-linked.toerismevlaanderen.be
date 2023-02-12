import Model, { attr, hasMany } from '@ember-data/model';

export default class FileModel extends Model {
  @attr filename;
  @attr format;
  @attr size;
  @attr extension;
  @attr('datetime') created;
  @attr('datetime') modified;

  @hasMany('dataset', { inverse: 'file', async: true }) datasets;

  get downloadLink() {
    return `/files/${this.id}/download`;
  }

  get namedDownloadLink() {
    return `${this.downloadLink}?name=${encodeURIComponent(this.filename)}`;
  }

  get humanReadableSize() {
    const bytes = this.size;
    const sizes = ['bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes == 0) {
      return '0 byte';
    } else {
      const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
      return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
    }
  }
}
