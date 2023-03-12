Feature: Update Pet Status
    I want to update the status of a pet
    the update happens with any given id for a pet

  Scenario: Update pet with id 90000006 to 'sold'
    Given I update the pet with id "90000006" status to "sold"
    Then the response status code should be 200