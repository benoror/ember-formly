import { moduleForComponent, test } from 'ember-qunit';
import wait from 'ember-test-helpers/wait';
import hbs from 'htmlbars-inline-precompile';
import { openDatepicker } from 'ember-pikaday/helpers/pikaday';

moduleForComponent('date-picker', 'Integration | Component | date picker', {
  integration: true,

  beforeEach() {
    this.set('model', {});
    this.set('key', 'test');
    this.set('options', {
      callback: () => {}
    });
  }
});

test('it renders', function(assert) {
  this.set('options.label', 'Test Label');

  this.render(hbs`{{date-picker
    model=model key=key options=options}}`);

  assert.equal(this.$().text().trim(),
    'Test Label', 'The component shows label');
});

test('it mutates an empty ({}) model', function(assert) {
  this.render(hbs`{{date-picker
    model=model key=key options=options}}`);

  let interactor = openDatepicker(this.$('input'));

  return wait().then(() => {
    interactor.selectDate(new Date(1989, 3, 28));
    assert.equal(this.get('model.test'), '28-03-1989', 'User interaction mutates the model');
  });

});

//test('it mutates a `null` model', function(assert) {
  //this.set('model', null);

  //this.render(hbs`{{ember-formly-fields/html-input
    //model=model key=key options=options}}`);

  //this.$('input[name="test"]').val('a');
  //this.$('input[name="test"]').change();
  //assert.equal(this.get('model.test'), 'a', 'User interaction mutates the model');
//});

