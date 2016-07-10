import Ember from 'ember';
import layout from '../templates/components/ember-formly-field-input';

const {
  get,
  computed
} = Ember;

export default Ember.Component.extend({
  layout,
  record: {},

  type: computed('templateOptions', function() {
    const templateOptions = get(this, 'templateOptions');
    return get(templateOptions, 'type') || 'text';
  }),

  value: computed('record', function() {
    const record = get(this, 'record');
    const key = get(this, 'key');
    return record[key];
  }),

  label: computed.alias('templateOptions.label'),
  placeholder: computed.alias('templateOptions.placeholder')
});
