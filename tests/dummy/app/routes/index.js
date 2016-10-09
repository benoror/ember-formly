import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      fields: [
        {
          key: 'email',
          component: 'ember-formly-fields/html-input',
          options: {
            type: 'email',
            label: 'Email address',
            placeholder: 'Enter email'
          }
        },
        {
          key: 'password',
          component: 'ember-formly-fields/html-input',
          options: {
            type: 'password',
            label: 'Password',
            placeholder: 'Password'
          }
        },
        {
          key: 'checked',
          component: 'ember-formly-fields/html-input',
          options: {
            type: 'checkbox',
            label: 'Check me out'
          }
        },
        {
          key: 'slider',
          component: 'ember-formly-fields/html-input',
          options: {
            type: 'range',
            label: 'Slide me out',
            min: 1,
            max: 5
          }
        },
        {
          key: 'chooseone',
          component: 'radios-inputs',
          options: {
            label: 'Chose one (radios)',
            inputs: [
              {key: 'a', label: 'Option A'},
              {key: 'b', label: 'Option B'},
              {key: 'c', label: 'Option C'}
            ]
          }
        },
        {
          key: 'choosemany',
          component: 'checkboxes-inputs',
          options: {
            label: 'Chose many (checkboxes)',
            inputs: [
              {key: 'w', label: 'Option W'},
              {key: 'x', label: 'Option X'},
              {key: 'y', label: 'Option Y'},
              {key: 'z', label: 'Option Z'}
            ]
          }
        },
        {
          key: 'optionaltext',
          component: 'three-state-textbox',
          options: {
            label: 'Optional text (three-state-textbox)',
            inputs: [
              {key: 'w', label: 'Option W'},
              {key: 'x', label: 'Option X'},
              {key: 'y', label: 'Option Y'},
              {key: 'z', label: 'Option Z'}
            ]
          }
        }
      ],
      model: {
        email: 'my@email.com',
        password: 's3cre7',
        checked: true,
        slider: 4,
        chooseone: 'c',
        choosemany: { w:false, x:true, y:false, z:true },
        optionaltext: { active:true, text:'Ok' }
      }
    };
  },

  setupController(controller, model) {
    this._super(...arguments);
    controller.setProperties(model);
  }
});
