const User = require('./user');

class Client extends User {
  billing = 0;

  constructor(billing) {
    super();
    this.billing = billing;
  }
}

module.exports = Client;
