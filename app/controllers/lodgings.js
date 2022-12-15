import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class LodgingsController extends Controller {
  @tracked sort = 'name';
  @tracked size = 20;
  @tracked page = 0;
  @tracked isLoadingModel = false;

  translatePaginationLabels(element) {
    const nodes = element.querySelectorAll('.au-c-pagination__list-item .au-c-button');
    nodes.forEach((node) => {
      node.childNodes.forEach((node) => {
        if (node.textContent.includes('vorige')) {
          node.textContent = 'previous';
        } else if (node.textContent.includes('volgende')) {
          node.textContent = 'next';
        }
      });
    });
  }
}
