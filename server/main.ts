import { Meteor } from 'meteor/meteor';
import { migrate } from './migrations/migrate';
import { APP_CONFIG } from 'app-config.ts';

Meteor.startup(() => {
  if (APP_CONFIG.migrations.migrate) {
    migrate();
  }
});
