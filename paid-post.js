const Post = require('./post');

class PaidPost extends Post {
  price;

  constructor(name, priece) {
    super(name);
    this.price = priece;
  }
}

module.exports = PaidPost;
