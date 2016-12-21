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
      if(!get(this, 'model')) {
        set(this, 'model', {});
      }
      set(get(this, 'model'), get(this, 'key'), value);
      return value;
    }
  })

});
