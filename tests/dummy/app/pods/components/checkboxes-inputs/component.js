import Ember from 'ember';
import EmberFormlyComponent from 'ember-formly/components/ember-formly-component';

const {
  get,
  computed
} = Ember;

export default EmberFormlyComponent.extend({
  inputs: computed('options.inputs.@each', function() {
    return get(this, 'options.inputs');
  })
});



