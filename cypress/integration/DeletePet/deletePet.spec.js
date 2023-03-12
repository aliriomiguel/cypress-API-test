Given('I have a pet with id {int}', (id) => {
    cy.request('GET', "https://petstore.swagger.io/v2/pet/" + id).then((response) => {
        expect(response.status).to.equal(200);
    });
});
  
When('I delete the pet with id {int}', (id) => {
    cy.request('DELETE', "https://petstore.swagger.io/v2/pet/" + id).then((response) => {
        expect(response.status).to.equal(200);
    });
});
  
Then('the pet with id {int} should be deleted', (id) => {
    cy.request(
        {
            method: 'GET',
            url: "https://petstore.swagger.io/v2/pet/" + id,
            failOnStatusCode: false
        }).then((response) => {
        expect(response.status).to.equal(404);
    });
});