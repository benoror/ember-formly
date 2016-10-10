import Ember from 'ember';
import EmberFormlyComponent from 'ember-formly/components/ember-formly-component';

const {
  get,
  set,
  computed
} = Ember;

export default EmberFormlyComponent.extend({
  inputs: computed('options.inputs.@each', function() {
    return get(this, 'options.inputs');
  }),

  actions: {
    setChecked(key, val) {
      const value = get(this, 'value');

      if(value) {
        set(value, key, val);
      } else {
        let tmp = {};
        tmp[key] = val;
        set(this, 'value', tmp);
      }
    }
  }
});



