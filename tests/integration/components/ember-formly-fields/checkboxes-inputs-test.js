import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('checkboxes-inputs', 'Integration | Component | checkboxes inputs', {
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
    {{checkboxes-inputs
      model=model
      key=key
      options=options}}
  `);

  assert.equal(this.$('div>span.checkboxes--label').text().trim(), 
    'Test Label', 'The component shows label');

  let checkboxes = this.$('input[type="checkbox"]');

  assert.equal(checkboxes.length, 3, 'The component shows the checkboxes');

  let labels = this.$('div>span.checkboxes--input--label');

  assert.equal(labels[2].textContent.trim(),
    'Label C', 'The component shows input labels');

  checkboxes[1].click();
  checkboxes[2].click();
  checkboxes[2].click(); 

  let testArray = this.get('model.test');

  assert.equal(testArray.includes('a'), false, 'User interaction mutates the model');
  assert.equal(testArray.includes('b'), true, 'User interaction mutates the model');
  assert.equal(testArray.includes('c'), false, 'User interaction mutates the model');

});
