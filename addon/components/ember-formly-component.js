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
      return get(this, 'model.' + key);
    },

    set(key, value) {
      key = get(this, 'key');
      set(get(this, 'model'), key, value);
      return value;
    }
  })

});
