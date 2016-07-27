import { Mongo } from 'meteor/mongo';
import { TodoSchema } from './TodoSchema';
import { Todo } from './Todo';
import { Collection2 } from '../Collection2';

let TodoCollection: Collection2<Todo> = new Mongo.Collection<Todo>('todos');

TodoCollection.attachSchema(TodoSchema);

TodoCollection.allow({
  insert: () => !!Meteor.user(),
  update: () => !!Meteor.user(),
  remove: () => !!Meteor.user()
});

export { TodoCollection }
