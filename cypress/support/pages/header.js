class Header {

  getHomeLink() {
    return cy.get(`a[href="#"]`);
  }

  getNewPostLink() {
    return cy.get(`a[href="#editor"]`);
  }

  getSettinsLink() {
    return cy.get(`a[href="#settings"]`);
  }

}

export default Header;