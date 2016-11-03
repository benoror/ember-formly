import Model from 'ember-data/model';
import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';
import {
  fragment
  //fragmentArray,
  //array
} from 'model-fragments/attributes';

export default Model.extend({
  email: attr('string'),
  password: attr('string'),
  checked: attr('boolean'),
  slider: attr('number'),
  chooseone: attr('string'),
  choosemany: attr(),
  optionaltext: attr(),
  nested: fragment('objFragment')
});
