import Ember from 'ember';
import layout from '../templates/components/ember-formly-field';

const {
  get,
  computed
} = Ember;

export default Ember.Component.extend({
  layout,
  tagName: '',

  field: {},
  model: {},

  getFieldComponent: computed('field', function() {
    const field = get(this, 'field');
    const component = get(field, 'component');
    return component || 'ember-formly-component-unknown';
  })
});
