import Header from './header';

class NewPostInput {

  constructor() {
    this.header = new Header();
  }
  
  visit() {
    cy.visit('https://react-redux.realworld.io/#/editor');
  }

  getArticleTitleInput() {
    return cy.getByPlaceholder('Article Title')
  }
  
  getArticleAboutInput() {
    return cy.getByPlaceholder(`What's this article about?`)
  }
    
  getWriteArticleInput() {
    return cy.getByPlaceholder("Write your article (in markdown)")
  }
      
  getEnterTagsInput() {
    return cy.getByPlaceholder("Enter tags")
  }

  getPublishArticleButton() {
    return cy.contains('button', 'Publish Article')
  }

}

export default NewPostInput;