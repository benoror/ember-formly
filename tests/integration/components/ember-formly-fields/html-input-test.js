import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('html-input', 'Integration | Component | html input', {
  integration: true,

  beforeEach() {
    this.set('model', {});
    this.set('key', 'test');
    this.set('options', {});
  }
});

test('it renders', function(assert) {
  this.set('options', {
    label: 'Test Label',
    placeholder: 'Test Placeholder'
  });

  this.render(hbs`{{ember-formly-fields/html-input
    model=model key=key options=options}}`);

  assert.equal(this.$().text().trim(),
    'Test Label', 'The component shows label');

  let inputs = this.$('input');
  assert.equal(inputs.length, 1, 'The component shows the textbox');
  assert.equal(inputs[0].type, 'text', 'The component shows the textbox');
});

test('it mutates an empty ({}) model', function(assert) {
  this.render(hbs`{{ember-formly-fields/html-input
    model=model key=key options=options}}`);

  this.$('input[name="test"]').val('a');
  this.$('input[name="test"]').change();
  assert.equal(this.get('model.test'), 'a', 'User interaction mutates the model');
});

test('it mutates a `null` model', function(assert) {
  this.set('model', null);

  this.render(hbs`{{ember-formly-fields/html-input
    model=model key=key options=options}}`);

  this.$('input[name="test"]').val('a');
  this.$('input[name="test"]').change();
  assert.equal(this.get('model.test'), 'a', 'User interaction mutates the model');
});
