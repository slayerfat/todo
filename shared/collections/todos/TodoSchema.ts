// import { Mongo } from 'meteor/mongo';

export let TodoSchema: any = new SimpleSchema({
  _id: {
    type: String,
    label: 'Todo Id'
  },
  owner: {
    type: String,
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
