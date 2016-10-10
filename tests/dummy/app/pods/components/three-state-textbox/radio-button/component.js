import Ember from 'ember';

const {
  Component,
  get,
  set,
  computed
} = Ember;

export default Component.extend({
  tagName: 'input',
  type: 'radio',
  attributeBindings: ['type', 'name', 'checked:checked'],

  click() {
    const record = get(this, 'record');
    const value = get(this, 'value');

    if(record) {
      set(record, 'active', value);
    } else {
      set(this, 'record', { active: value, text: '' });
    }
  },

  checked: computed('record.active', 'value', function() {
    const currentActiveValue = get(this, 'record.active');

    if (currentActiveValue === null) { return; }
    return currentActiveValue === get(this, 'value');
  })
});

