import { modifier } from 'ember-modifier';
import Yasgui from '@triply/yasgui';
import env from '../config/environment';

const defaultQuery =
  env.yasgui.defaultQuery !== 'EMBER_YASGUI_DEFAULT_QUERY'
    ? env.yasgui.defaultQuery
    : `PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX logies: <https://data.vlaanderen.be/ns/logies#Logies>

SELECT * WHERE {
  ?sub a logies:Logies ; ?p ?o .
}
LIMIT 10
`;

export default modifier(function yasgui(element /*, params, hash*/) {
  const yasgui = new Yasgui(element, {
    requestConfig: { endpoint: '/sparql' },
    autofocus: true,
  });
  yasgui.config.yasqe.value = defaultQuery;
  if (env.yasgui.extraPrefixes !== 'EMBER_YASGUI_EXTRA_PREFIXES')
    yasgui.config.yasqe.addPrefixes(JSON.parse(env.yasgui.extraPrefixes));
});
