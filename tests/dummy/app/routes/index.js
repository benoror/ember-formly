import Ember from 'ember';

const {
  set
} = Ember;

export default Ember.Route.extend({
  model() {
    return [
      {
        key: 'email',
        type: 'input',
        templateOptions: {
          type: 'email',
          label: 'Email address',
          placeholder: 'Enter email'
        }
      },
      {
        key: 'password',
        type: 'input',
        templateOptions: {
          type: 'password',
          label: 'Password',
          placeholder: 'Password'
        }
      },
      {
        key: 'checked',
        type: 'input',
        templateOptions: {
          type: 'checkbox',
          label: 'Check me out'
        }
      }
    ];
  },

  setupController(controller, model) {
    this._super(...arguments);
    set(controller, 'fields', model);
  }
});
