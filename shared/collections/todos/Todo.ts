import { Mongo } from 'meteor/mongo';

export interface Todo {
  _id?: Mongo.ObjectID;
  owner: Mongo.ObjectID;
  contents: string;
  completed?: boolean;
  updatedAt?: Date;
}
