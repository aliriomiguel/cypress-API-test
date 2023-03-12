  Given('I update the pet with id {string} status to {string}', (petId, status) => {
    cy.request('GET', "https://petstore.swagger.io/v2/pet/"+petId+"?status="+status).as('updatePet');
  });
  
  Then('the response status code should be {int}', (statusCode) => {
    cy.get('@updatePet').should((response) => {
      expect(response.status).to.equal(statusCode);
    });
  });