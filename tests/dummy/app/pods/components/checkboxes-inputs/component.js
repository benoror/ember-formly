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
    setChecked(key) {
      let value = get(this, 'value');

      if(!value) {
        value = [];
      }

      if(!value.includes(key)) {
        value.pushObject(key);
      }
    }
  }
});



