# Ember-formly

> ### JavaScript Powered Forms for AngularJS

ember-formly is an Ember.js addon based on [angular-formly](https://github.com/formly-js/angular-formly)

The aim isn't to fully duplicate angular-formly's functionality, but instead to propose a **new & simplified mechanism for automating form creation** by using modern patterns like **components** (instead of custom directives) while keeping some key concepts like `model` and `fields` concepts

# Installation

```
ember install ember-formly
```

# Example

![http://g.recordit.co/8cn0KyxHYO.gif](http://g.recordit.co/8cn0KyxHYO.gif)

### Route/Component/Controller:

```
  model() {
    return {
      age: 20,
      veggie: true,
      favcolor: '#0000ff',
      borndate: '1986-11-14'
    }
  },
  fields: computed(function() {
    return [
      {
        key: 'age',
        component: 'custom-fields/html-input',
        options: {
          type: 'number',
          label: 'Age'
        }
      },
      {
        key: 'veggie',
        component: 'custom-fields/html-input',
        options: {
          type: 'checkbox',
          label: 'Is a Veggie?'
        }
      },
      {
        key: 'favcolor',
        component: 'custom-fields/html-input',
        options: {
          type: 'color',
          label: 'Favorite Color'
        }
      },
      {
        key: 'borndate',
        component: 'custom-fields/date-picker',
        options: {
          label: 'Born Date'
        }
      }
    ]
  })
```

### Template:

```
{{ember-formly fields=fields model=model}}
```

# Usage

> [PENDING]

# Development

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
