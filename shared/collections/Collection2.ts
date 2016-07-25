import { Mongo } from 'meteor/mongo';

export interface Collection2<T> extends Mongo.Collection<T> {
  attachSchema?(schema: any): void;
}
