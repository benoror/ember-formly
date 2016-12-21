import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('field-group', 'Integration | Component | field group', {
  integration: true
});

test('it renders', function(assert) {
  this.set('model', {});
  this.set('key', 'test');
  this.set('options', {
    title: 'Test Title',
    fields: []
  });

  this.render(hbs`
    {{field-group
      model=model
      key=key
      options=options}}
  `);

  assert.equal(this.$('h3').text().trim(),
    'Test Title', 'The component shows label');
});
