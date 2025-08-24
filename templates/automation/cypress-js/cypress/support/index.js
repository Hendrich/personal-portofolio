// Custom commands dan support file
// https://docs.cypress.io/guides/tooling/writing-your-own-commands

Cypress.Commands.add("login", (username, password) => {
  cy.get('input[name="username"]').type(username);
  cy.get('input[name="password"]').type(password);
  cy.get('button[type="submit"]').click();
});
