class AbstractView {
  setTitle(title) {
    document.title = title;
  }

  async getHtml() {
    return '';
  }
}

export default AbstractView;
