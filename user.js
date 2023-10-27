class User {
  name;

  constructor(name) {
    this.name = name;
  }

  read(book) {
    return `${this.name} is reading ${book}`;
  }
}

module.exports = User;
