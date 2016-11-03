import ModelFragment from 'model-fragments/fragment';
import attr from 'ember-data/attr';
import { fragment } from 'model-fragments/attributes';

export default ModelFragment.extend({
  foo: attr('string'),
  meep: fragment('threeStateTextbox')
});

