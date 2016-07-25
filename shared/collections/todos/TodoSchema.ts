import { Mongo } from 'meteor/mongo';

export let TodoSchema: any = new SimpleSchema({
  _id: {
    type: Mongo.ObjectID,
    label: 'Product Id'
  },
  owner: {
    type: Mongo.ObjectID,
    label: 'The todo owner'
  },
  contents: {
    type: String,
    label: 'The contents of the Todo'
  },
  completed: {
    type: Boolean,
    label: 'is the Todo completed Flag'
  }
});
