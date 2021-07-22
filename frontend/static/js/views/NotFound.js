import AbstractView from './AbstractView.js';

class NotFound extends AbstractView {
  constructor(Params) {
    super(Params);
    this.setTitle('404 Page');
  }

  async getHtml() {
    return `
      <h1>404</h1>
      <p>
        We couldn't find the page that you are looking for :(
      </p>
      <p><a href="/" rel="noreferrer noopener">Go to Home</a></p>
    `;
  }
}

export default NotFound;
