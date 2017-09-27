import Ember from 'ember';
import layout from '../templates/components/ember-formly-field';
import SpreadMixin from 'ember-spread';

const {
  get,
  computed
} = Ember;

export default Ember.Component.extend(SpreadMixin, {
  layout,
  tagName: '',

  field: {},
  model: {},

  options: computed('field.options', function() {
    let fieldOptions = get(this, 'field.options');
    return Ember.Object.extend(fieldOptions);
  }),

  getFieldComponent: computed('field', function() {
    const field = get(this, 'field');
    const component = get(field, 'component');
    return component || 'ember-formly-component-unknown';
  })
});
