import AbstractView from './AbstractView.js';

class Posts extends AbstractView {
  constructor() {
    super();
    this.setTitle('Posts');
  }

  async getHtml() {
    return `
      <h1>Posts</h1>
      <p>
        You are viewing posts!
      </p>
    `;
  }
}

export default Posts;
