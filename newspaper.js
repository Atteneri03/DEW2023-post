const PaidPost = require('./paid-post');

class Newspaper extends PaidPost {
  constructor(name, priece, district) {
    super(name, priece);
    this.district = district;
  }

  get summary() {
    return `${super.summary} of ${this.district}`;
  }
}

module.exports = Newspaper;
