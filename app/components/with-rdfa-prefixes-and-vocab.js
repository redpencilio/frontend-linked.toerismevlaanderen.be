import { computed } from '@ember/object';
import Component from '@ember/component';

export default Component.extend({
  tagName: 'div',
  attributeBindings: ["vocab", "prefixes"],
  vocab: computed( function() {
    const vocab=""; // generated
    return vocab != "" && vocab;
  }),
  prefixes: computed( function() {
    const prefixes = "ext:http://mu.semte.ch/vocabularies/ext/ mu:http://mu.semte.ch/vocabularies/core/ regorg:http://www.w3.org/ns/regorg# vcard:http://www.w3.org/2006/vcard/ns# foaf:http://xmlns.com/foaf/0.1/ geosparql:http://www.opengis.net/ont/geosparql# logies:https://data.vlaanderen.be/ns/logies# organisatie:https://data.vlaanderen.be/ns/organisatie# adres:https://data.vlaanderen.be/ns/adres# generiek:https://data.vlaanderen.be/ns/generiek# wgs:http://www.w3.org/2003/01/geo/wgs84_pos# prov:http://www.w3.org/ns/prov# locn:http://www.w3.org/ns/locn# adms:http://www.w3.org/ns/adms# skos:http://www.w3.org/2004/02/skos/core# dct:http://purl.org/dc/terms/ schema:http://schema.org/ rm:http://mu.semte.ch/vocabularies/logical-delete/ typedLiterals:http://mu.semte.ch/vocabularies/typed-literals/ xsd:http://www.w3.org/2001/XMLSchema# app:http://mu.semte.ch/app/ owl:http://www.w3.org/2002/07/owl# rdf:http://www.w3.org/1999/02/22-rdf-syntax-ns#"; // generated
    return prefixes != "" && prefixes;
  })
});
