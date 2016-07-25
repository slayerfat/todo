/**
 * @link https://atmospherejs.com/percolate/migrations
 */
declare var Migrations: {
  add(options: AddMigrationOptions);
  migrateTo(where: number | string);
  getVersion();
  config(options: MigrationsOptions);
};

interface MigrationsOptions {
  /**
   * Log job run details to console
   */
  log: boolean;

  /**
   * Use a custom logger function (defaults to Meteor's logging package)
   */
  logger: Object;

  /**
   * Enable/disable logging "Not migrating, already at version {number}"
   */
  logIfLatest: boolean;

  /**
   * migrations collection name to use in the database
   */
  collectionName: string;
}

interface AddMigrationOptions {
  version: number;
  up?();
  down?();
}
