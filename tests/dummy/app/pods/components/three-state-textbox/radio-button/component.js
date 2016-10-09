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
    set(get(this, 'record'), 'active', get(this, 'value'));
  },

  checked: computed('record.active', 'value', function() {
    const currentActiveValue = get(this, 'record.active');

    if (currentActiveValue === null) { return; }
    return currentActiveValue === get(this, 'value');
  })
});

