import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

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

