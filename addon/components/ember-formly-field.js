import Ember from 'ember';
import layout from '../templates/components/ember-formly-field';

const {
  get,
  computed
} = Ember;

export default Ember.Component.extend({
  layout,
  field: {},
  record: {},

  selectFieldComponent: computed('field', function() {
    const field = get(this, 'field');
    const type = get(field, 'type') || 'unknown';

    return `ember-formly-field-${type}`;
  })
});
