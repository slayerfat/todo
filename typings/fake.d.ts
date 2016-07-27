/**
 * @link https://atmospherejs.com/anti/fake
 */
declare var Fake: {
  sentence(words: number): string;
  paragraph(words: number): string;
  word(): string;
  color(): string;
  /**
   * the fields to be included in the user object result:
   * name, surname, fullname, username, email, emails.address, profile.name
   *
   * @param {array} fields
   */
  user(fields: []): UserObjectResult;
  fromArray(array: []): {};
};

interface UserObjectResult {
  name?: string;
  surname?: string;
  fullname?: string;
  username?: string;
  email?: {
    address: string;
  };
  profile?: {name: string};
}
