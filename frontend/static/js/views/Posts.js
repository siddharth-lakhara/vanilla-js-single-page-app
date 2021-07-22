import AbstractView from './AbstractView.js';

class Posts extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Posts');
  }

  async getHtml() {
    return `
      <h1>Posts</h1>
      <p>
        Have a look at my posts
      </p>
      <ul>
        <li><a href="/posts/1" rel="noreferrer noopener">Post 1</a></li>
        <li><a href="/posts/2" rel="noreferrer noopener">Post 2</a></li>
        <li><a href="/posts/3" rel="noreferrer noopener">Post 3</a></li>
      </ul>
    `;
  }
}

export default Posts;
