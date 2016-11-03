import ModelFragment from 'model-fragments/fragment';
import attr from 'ember-data/attr';

export default ModelFragment.extend({
  active: attr(),
  text: attr('string')
});


