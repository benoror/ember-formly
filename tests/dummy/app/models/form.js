import Model from 'ember-data/model';
import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';
import {
  fragment
  //fragmentArray,
  //array
} from 'model-fragments/attributes';

export default Model.extend({
  document: attr({
    defaultValue: () => { return {}; }
  }),
  nested: fragment('objFragment')
});
