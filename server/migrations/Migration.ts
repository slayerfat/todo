import { Collection2 } from '../../shared/collections/Collection2';

export abstract class Migration {

  /**
   * The version (number control) of a particular migration.
   */
  protected ver: number;

  /**
   * The Mongo collection to be manipulated.
   */
  protected collection: Collection2<Object>;

  /**
   * The user to be associated to the new migrations.
   */
  protected user: {_id: string};

  constructor(collection: Collection2<Object>, user) {
    this.collection = collection;
    this.user = user;
  }

  get version() {
    return this.ver;
  }

  set version(val: any) {
    throw new Error(`Migration does not allow to set a new version ${val}`);
  }

  /**
   * Logic necessary to add the required migration.
   */
  public abstract up(): void;

  /**
   * Logic necessary to destroy the migration from the Db.
   */
  public abstract down(): void;
}
