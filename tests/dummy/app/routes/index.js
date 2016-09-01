import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      fields: [
        {
          key: 'email',
          component: 'simple-input',
          options: {
            type: 'email',
            label: 'Email address',
            placeholder: 'Enter email'
          }
        },
        {
          key: 'password',
          component: 'simple-input',
          options: {
            type: 'password',
            label: 'Password',
            placeholder: 'Password'
          }
        },
        {
          key: 'checked',
          component: 'simple-input',
          options: {
            type: 'checkbox',
            label: 'Check me out'
          }
        }
      ],
      model: {
        email: 'my@email.com',
        password: 's3cre7',
        checked: true
      }
    };
  },

  setupController(controller, model) {
    this._super(...arguments);
    controller.setProperties(model);
  }
});
