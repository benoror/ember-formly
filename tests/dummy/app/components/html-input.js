import Ember from 'ember';
import EmberFormlyComponent from 'ember-formly/components/ember-formly-component';

const {
  get,
  computed
} = Ember;

export default EmberFormlyComponent.extend({
  label: computed.alias('options.label'),

  placeholder: computed.alias('options.placeholder'),

  type: computed('options', function() {
    const options = get(this, 'options');
    return get(options, 'type') || 'text';
  })
});
