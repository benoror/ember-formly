import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('dropdown-inputs', 'Integration | Component | dropdown inputs', {
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
    options: [
      { value: 'a', label: 'Label A' },
      { value: 'b', label: 'Label B' },
      { value: 'c', label: 'Label C' }
    ]
  });

  this.render(hbs`
    {{dropdown-inputs
      model=model
      key=key
      options=options}}
  `);

  assert.equal(this.$('div>span.dropdown--label').text().trim(),
    'Test Label', 'The component shows label');

  let options = this.$('div>select>option');

  assert.equal(options.length, 4, 'The component shows the options');
  assert.equal(options[3].textContent.trim(),
    'Label C', 'The component shows input labels');
});

test('it mutates an empty ({}) model', function(assert) {
  this.set('options', {
    options: [
      { value: 'a', label: 'Label A' },
      { value: 'b', label: 'Label B' },
      { value: 'c', label: 'Label C' }
    ]
  });

  this.render(hbs`
    {{dropdown-inputs
      model=model
      key=key
      options=options}}
  `);

  this.$('select').val('a').change();
  assert.equal(this.get('model.test'), 'a', 'User interaction mutates the model');
  this.$('select').val('b').change();
  assert.equal(this.get('model.test'), 'b', 'User interaction mutates the model');
  this.$('select').val('c').change();
  assert.equal(this.get('model.test'), 'c', 'User interaction mutates the model');
});

test('it mutates a `null` model', function(assert) {
  this.set('model', null);

  this.set('options', {
    options: [
      { value: 'a', label: 'Label A' },
      { value: 'b', label: 'Label B' },
      { value: 'c', label: 'Label C' }
    ]
  });

  this.render(hbs`
    {{dropdown-inputs
      model=model
      key=key
      options=options}}
  `);

  this.$('select').val('a').change();
  assert.equal(this.get('model.test'), 'a', 'User interaction mutates the model');
  this.$('select').val('b').change();
  assert.equal(this.get('model.test'), 'b', 'User interaction mutates the model');
  this.$('select').val('c').change();
  assert.equal(this.get('model.test'), 'c', 'User interaction mutates the model');
});

