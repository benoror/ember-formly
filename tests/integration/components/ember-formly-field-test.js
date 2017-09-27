import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';
const { computed } = Ember;

moduleForComponent('ember-formly-field', 'Integration | Component | ember formly field', {
  integration: true
});

test('it renders', function(assert) {
  this.set('model', {});
  this.set('field', {});

  this.render(hbs`
    <div class="outer-wrapper">
      {{ember-formly-field field=field model=model}}
    </div>
  `);

  let pre = this.$('div.outer-wrapper > pre');

  assert.equal(pre.text().trim(), 'Ember Formly: Unknown Component',
    'render without wrapper divs');
});

// test('it spreads options to top level component ', function(assert) {

test('it observes computed properties in options', function(assert) {
  this.set('model', {});
  this.set('myArray', Ember.A(['a']));
  this.set('myLength', computed('myArray.length', function() {
    let myArray = this.get('myArray');
    return myArray.length;
  }));
  this.set('options', {
    myLength: computed('myLength', function() {
      return this.get('myLength');
    })
  });

  this.render(hbs`{{ember-formly-fields/html-input
    model=model key=key options=options}}`);

  assert.equal(this.get('myLength'), 1, 'Initial computed property result');
  assert.equal(this.get('options.myLength'), 1, 'Options: Initial computed property result');

  let myArray = this.get('myArray');
  myArray.pushObject('b');

  assert.equal(this.get('myLength'), 2, 'Change in computed property');
  assert.equal(this.get('options.myLength'), 2, 'Options: Change in computed property');
});
