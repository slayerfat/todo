import { Migration } from './Migration';
import { Collection2 } from '../../shared/collections/Collection2';
import { Todo } from '../../shared/collections/todos/Todo';

export class TodoMigration extends Migration {

  protected ver = 1;

  constructor(collection: Collection2<Todo>, user) {
    super(collection, user);
  }

  public up(): void {
    for (let i = 0; i < 10; i++) {
      this.collection.insert({
        owner: this.user._id,
        contents: Fake.sentence(10),
        completed: false
      });
    }
  }

  public down(): void {
    this.collection.remove({});
  }
}
