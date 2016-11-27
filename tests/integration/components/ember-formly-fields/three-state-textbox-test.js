import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('three-state-textbox', 'Integration | Component | three state textbox', {
  integration: true
});

test('it renders', function(assert) {
  this.set('model', {});
  this.set('key', 'test');
  this.set('options', {
    mode: 'edit',
    label: 'Test Label'
  });

  this.render(hbs`
    {{three-state-textbox
      model=model
      key=key
      options=options}}
  `);

  assert.equal(this.$('div.label').text().trim(),
    'Test Label', 'The component shows label');

  let radios = this.$('input[type="radio"]');

  assert.equal(radios.length, 2, 'The component shows the radios');

  assert.notOk(this.$('.textarea--widget-box')[0], 'Textarea is hidden by default');

  radios[1].click();
  assert.equal(this.get('model.test.active'), false,
    'User interaction mutates the model');
  assert.notOk(this.$('.textarea--widget-box')[0], 'Textarea is hidden when false');

  radios[0].click();
  assert.equal(this.get('model.test.active'), true, 'User interaction mutates the model');
  assert.ok(this.$('textarea')[0], 'Textarea is not hidden when true');

});
