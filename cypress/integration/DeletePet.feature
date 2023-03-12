Feature: Delete Pet
  I want to delete a pet from the Petstore
  So that I can remove the pet with the given id

  Scenario: Delete pet by id
    Given I have a pet with id 90000006
    When I delete the pet with id 90000006
    Then the pet with id 90000006 should be deleted