describe('SauceDemo Login Tests', () => {
  const url = 'https://www.saucedemo.com/';
  const usuario = 'standard_user';
  const senha = 'secret_sauce';
  const usuarioteste = 'usuarioteste';
  const senhateste = 'teste123';

  beforeEach(() => {
    cy.visit(url);
  });

  it('Deve realizar login com credenciais válidas', () => {
    cy.get('#user-name').type(usuario);
    cy.get('#password').type(senha);
    cy.get('#login-button').click();
    cy.url().should('include', '/inventory.html');
  });

  it('Deve realizar login com credenciais inválidas', () => {
    cy.get('#user-name').type(usuarioteste);
    cy.get('#password').type(senhateste);
    cy.get('#login-button').click();
    cy.get('[data-test="error"]').should('be.visible');
  });

  it('Deve realizar login com campos em branco', () => {
    cy.get('#login-button').click();
    cy.get('[data-test="error"]').should('be.visible');
  });

  it('Deve adicionar item ao carrinho e realizar checkout', () => {
    cy.get('#user-name').type(usuario);
    cy.get('#password').type(senha);
    cy.get('#login-button').click();
    cy.get('#add-to-cart-sauce-labs-backpack').first().click();
    cy.get('#shopping_cart_container').click();
    cy.get('.btn.btn_action.btn_medium.checkout_button').click();
    cy.get('#first-name').type('teste');
    cy.get('#last-name').type('teste');
    cy.get('#postal-code').type('12345');
    cy.get('#continue').click();
    cy.get('#finish').click();
    cy.get('.complete-header').should('contain', 'Thank you for your order!');
  });

  it('Deve adicionar item ao carrinho e remove-lo', () => {
    cy.get('#user-name').type(usuario);
    cy.get('#password').type(senha);
    cy.get('#login-button').click();
    cy.get('#add-to-cart-sauce-labs-backpack').first().click();
    cy.get('#shopping_cart_container').click();
    cy.get('#remove-sauce-labs-backpack').click();
    cy.get('#continue-shopping').click();
  });
});
