const PaidPost = require('./paid-post');

class Magazine extends PaidPost {
  constructor(name, priece, topic) {
    super(name, priece);
    this.topic = topic;
  }

  get summary() {
    return `${super.summary} of ${this.topic}`;
  }
}

module.exports = Magazine;
