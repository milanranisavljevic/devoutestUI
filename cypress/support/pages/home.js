import Header from './header';
import NewPost from './newpostinput';

class HomePage {

  constructor() {
    this.header = new Header();
  }
  
  visit() {
    cy.visit('/');
  }
  
  goToHome() {
    const link = this.header.getNewPostLink();
    link.should('be.visible').click();
    return new NewPost();
  }

  goToNewPost() {
    const link = this.header.getNewPostLink();
    link.should('be.visible').click();
    return new NewPost();
  }

  goToSettings() {
    const link = this.header.getSettinsLink();
    link.should('be.visible').click();
    return new NewPost();
  }
}

export default HomePage;