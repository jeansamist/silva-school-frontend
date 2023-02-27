describe('libs-ui: LibsUi component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=libsui--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to LibsUi!');
    });
});
