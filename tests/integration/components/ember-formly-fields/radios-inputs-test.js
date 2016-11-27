import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('radios-inputs', 'Integration | Component | radios inputs', {
  integration: true
});

test('it renders', function(assert) {
  this.set('model', {});
  this.set('key', 'test');
  this.set('options', {
    mode: 'edit',
    label: 'Test Label',
    inputs: [
      { key: 'a', label: 'Label A' },
      { key: 'b', label: 'Label B' },
      { key: 'c', label: 'Label C' }
    ]
  });

  this.render(hbs`
    {{radios-inputs
      model=model
      key=key
      options=options}}
  `);

  assert.equal(this.$('div>span.radios--label').text().trim(),
    'Test Label', 'The component shows label');

  let radios = this.$('div>input[type="radio"]');

  assert.equal(radios.length, 3, 'The component shows the radios');

  let labels = this.$('div>span.radios--input--label');

  assert.equal(labels[2].textContent.trim(),
    'Label C', 'The component shows input labels');

  radios[0].click();
  assert.equal(this.get('model.test'), 'a', 'User interaction mutates the model');
  radios[2].click();
  assert.equal(this.get('model.test'), 'c', 'User interaction mutates the model');
  radios[1].click();
  assert.equal(this.get('model.test'), 'b', 'User interaction mutates the model');
});
