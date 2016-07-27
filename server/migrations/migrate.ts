import { TodoMigration } from './TodoMigration';
import { TodoCollection } from '../../shared/collections/todos/TodoCollection';
import { APP_CONFIG } from '../../shared/config/app-config';
import { Accounts } from 'meteor/accounts-base';

export function migrate() {
  // we check if an user exists, if not, we create a new one
  const user = Accounts.findUserByEmail(APP_CONFIG.user.email) ||
    Accounts.createUser({
      username: APP_CONFIG.user.name,
      email: APP_CONFIG.user.email,
      password: APP_CONFIG.user.password,
    });

  // the migrations to be called by the migrate function.
  const todoMigration = new TodoMigration(TodoCollection, user);

  // Each migration needs to be added with the add method.
  Migrations.add({
    version: todoMigration.version,
    up: todoMigration.up.bind(todoMigration),
    down: todoMigration.down.bind(todoMigration)
  });

  if (APP_CONFIG.migrations.reset) {
    Migrations.migrateTo(0);
  }

  Migrations.migrateTo('latest');
}
