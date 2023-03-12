Given('I send a GET request', () => {
  cy.request('GET', 'https://petstore.swagger.io/v2/pet/findByStatus?status=available').as('response');
});
  
When('the response status should be {int}', (status) => {
  cy.get('@response').its('status').should('equal', status);
});
  
Then('the response should contain pets', () => {
  cy.get('@response').its('body').should('not.be.empty');
  cy.get('@response').its('body').each((pet) => {
    expect(pet).to.have.property('id');
    expect(pet).to.have.property('status', 'available');
  });
});