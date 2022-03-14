import Header from './header';

class NewPostPreview {

  getArticleTitle() {
    return cy.get('h1')
  }
  
  getArticleAuthorLabel() {
        return cy.get(`.author`)
  }

  getEditArticleButton() {
      return cy.get(`.btn-outline-secondary`)
  }

  getDeleteArticleButton() {
      return cy.get(`.btn-outline-danger`)
  }

}

export default NewPostPreview;