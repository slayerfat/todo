import { Mongo } from 'meteor/mongo';

export interface Todo {
  owner: Mongo.ObjectID;
  contents: string;
  completed: boolean;
}
