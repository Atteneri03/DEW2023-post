const User = require('./user');

class Post {
  name;

  #number = 0;

  #suscribers = [];

  constructor(name) {
    this.name = name;
  }

  get summary() {
    return `${this.name} publication number ${this.#number}`;
  }

  getSubscribers() {
    const subs = this.#suscribers.map((user) => user.name).join(',');
    return subs;
  }

  attach(user) {
    if (user instanceof User && !this.#suscribers.includes(user)) {
      this.#suscribers.push(user);
    }
  }
}

module.exports = Post;
