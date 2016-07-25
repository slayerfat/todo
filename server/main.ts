import { Meteor } from 'meteor/meteor';
import { migrate } from './migrations/migrate';

Meteor.startup(() => {
  if (Meteor.settings.migrate) {
    migrate();
  }
});
