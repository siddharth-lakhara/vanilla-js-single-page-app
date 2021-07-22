import AbstractView from './AbstractView.js';

class PostView extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle('Viewing Posts');
  }

  async getHtml() {
    console.log(this.params);
    return `
      <h1>Posts</h1>
      <p>
        You are viewing posts with id ${this.params.id}!
      </p>
    `;
  }
}

export default PostView;
