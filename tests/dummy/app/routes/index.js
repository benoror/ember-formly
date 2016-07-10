import Ember from 'ember';

const {
  set
} = Ember;

export default Ember.Route.extend({
  model() {
    return {
      fields: [
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
      ],
      data: {
        email: 'my@email.com',
        password: 's3cre7',
        checked: true
      }
    };
  },

  setupController(controller, model) {
    this._super(...arguments);
    set(controller, 'fields', model.fields);
    set(controller, 'record', model.data);
  }
});
