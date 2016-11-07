# Ember-formly

> JavaScript Powered Forms for Ember.js

[![NPM](https://nodei.co/npm/ember-formly.png)](https://npmjs.org/package/ember-formly)

![Download count all time](https://img.shields.io/npm/dt/ember-formly.svg) [![Ember Observer Score](https://emberobserver.com/badges/ember-formly.svg)](https://emberobserver.com/addons/ember-formly) [![Build Status](https://travis-ci.org/benoror/ember-formly.svg?branch=master)](https://travis-ci.org/benoror/ember-formly) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

ember-formly is an Ember.js addon based on [angular-formly](https://github.com/formly-js/angular-formly)

The aim isn't to fully duplicate angular-formly's functionality, but instead to propose a **new & simplified mechanism for automating form creation** by using patterns like **components** (instead of custom directives) while keeping some key concepts like `model` and `fields`.

# Installation

```
ember install ember-formly
```

# Example

![http://g.recordit.co/8cn0KyxHYO.gif](http://g.recordit.co/8cn0KyxHYO.gif)

### Route/Component/Controller:

```javascript
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

### Basic Template

```handlebars
{{ember-formly fields=fields model=model}}
```

### `fieldClassName`

Apply a `class` to each `field`:

```handlebars
{{ember-formly fields=fields model=model fieldClassName="foobar"}}
```

#### Block

Use custom markup for each field:

```handlebars
{{#ember-formly fields=fields as |field|}}
  <div class="baz-wrapper">
    {{ember-formly-field field=field model=model.nested}}
  </div>
{{/ember-formly}}
```

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
