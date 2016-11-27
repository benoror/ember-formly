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
    setChecked(prop) {
      let model = get(this, 'model');
      let key = get(this, 'key');

      if (!get(model, key)) {
        set(model, key, Ember.A());
      }

      let values = get(model, key);

      if (values.includes(prop)) {
        values.removeObject(prop);
      } else {
        values.pushObject(prop);
      }
    }
  }
});



