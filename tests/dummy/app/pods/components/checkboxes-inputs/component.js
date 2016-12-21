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
      let key = get(this, 'key');

      if (!get(this, 'model')) {
        set(this, 'model', {});
      }

      if (!get(this, `model.${key}`)) {
        set(get(this, 'model'), key, Ember.A());
      }

      let values = get(this, `model.${key}`);

      if (values.includes(prop)) {
        values.removeObject(prop);
      } else {
        values.pushObject(prop);
      }
    }
  }
});



