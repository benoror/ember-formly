import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-formly', 'Integration | Component | ember formly', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.render(hbs`{{ember-formly}}`);

  assert.equal(this.$().text().trim(), '');

  // Simply passing strings array to test block usage:
  this.set('fields', ['a','b','c']);

  this.render(hbs`
    {{#ember-formly fields=fields as |field|}}
      {{field}}
    {{/ember-formly}}
  `);

  assert.equal(this.$().text().trim().replace(/[ \n]/g, ''), 'abc');
});
