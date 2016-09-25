import Ember from 'ember';
import layout from '../../templates/components/ember-formly-fields/html-input';
import EmberFormlyComponent from '../ember-formly-component';

const {
  get,
  computed
} = Ember;

export default EmberFormlyComponent.extend({
  layout,

  label: computed.alias('options.label'),

  placeholder: computed.alias('options.placeholder'),

  type: computed('options', function() {
    const options = get(this, 'options');
    return get(options, 'type') || 'text';
  })
});
