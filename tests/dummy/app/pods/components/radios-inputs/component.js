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
    setValue(value) {
      return set(this, 'value', value);
    }
  }
});




