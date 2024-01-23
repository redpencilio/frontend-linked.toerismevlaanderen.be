import { modifier } from 'ember-modifier';
import hljs from 'highlight.js';

export default modifier(function highlight(element /*, positional, named*/) {
  hljs.highlightElement(element);
});
