import AbstractView from './AbstractView.js';

class Settings extends AbstractView {
  constructor(Params) {
    super(Params);
    this.setTitle('Settings');
  }

  async getHtml() {
    return `
      <h1>Settings</h1>
      <p>
        Manage your privacy and configuration
      </p>
    `;
  }
}

export default Settings;
