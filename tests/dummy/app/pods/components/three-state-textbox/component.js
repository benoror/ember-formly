import Ember from 'ember';
import EmberFormlyComponent from 'ember-formly/components/ember-formly-component';

const {
  computed,
  get
} = Ember;

export default EmberFormlyComponent.extend({
  isActive: computed('value.active', function() {
    return get(this, 'value.active') === true;
  })
});




