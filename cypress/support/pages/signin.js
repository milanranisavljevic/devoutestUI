class SignInPage {
    visit() {
      cy.visit('https://react-redux.realworld.io/#/login');
    }
  
    fillEmail(value) {
      const field = cy.getByPlaceholder("Email");
      field.should('be.visible')
      field.clear();
      field.type(value);
      
      return this;
    }
  
    fillPassword(value) {
      const field = cy.getByPlaceholder("Password");
      field.should('be.visible')
      field.clear();
      field.type(value);
      
      return this;
    }
    
    submit() {
      const button = cy.contains('button', 'Sign in');
      button.should('be.visible')
      button.click();
    }
  }
  
  export default SignInPage;