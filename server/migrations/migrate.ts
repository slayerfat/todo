import { TodoMigration } from './TodoMigration';
import { TodoCollection } from '../../shared/collections/todos/TodoCollection';

// TODO create real user migration.
const user = {_id: '123'};

// the migrations to be called by the migrate function.
const todoMigration = new TodoMigration(TodoCollection, user);

export function migrate() {
  // Each migration needs to be added with the add method.
  Migrations.add({
    version: todoMigration.version,
    up: todoMigration.up.bind(todoMigration),
    down: todoMigration.down.bind(todoMigration)
  });

  Migrations.migrateTo('latest');
}
