let requestBody

Given('I set the request body to:', (body) => {
    requestBody = JSON.parse(body);
});

When('I send the API request', () => {
  cy.request({
    method: "POST",
    url: "https://petstore.swagger.io/v2/pet",
    body: requestBody,
    headers: {
      'Content-Type': 'application/json'
    }
  }).as('response');
});

Then('the response status should be {int}', (statusCode) => {
  cy.get('@response').its('status').should('equal', statusCode);
});

Then('the response body should contain:', (body) => {
  const expectedBody = JSON.parse(body);
  cy.get('@response').its('body').should('deep.equal', expectedBody);
});