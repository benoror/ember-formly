import Ember from 'ember';

const {
  computed,
  get,
  set
} = Ember;

export default Ember.Component.extend({
  tagName: '',

  value: computed('model', 'key', {
    get(key) {
      key = get(this, 'key');
      return get(this, 'model')[key];
    },

    set(key, value) {
      key = get(this, 'key');
      set(get(this, 'model'), key, value);
      return value;
    }
  }),

  type: computed('options', function() {
    const options = get(this, 'options');
    return get(options, 'type') || 'text';
  }),

  label: computed.alias('options.label'),

  placeholder: computed.alias('options.placeholder')

});
