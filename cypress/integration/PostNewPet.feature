Feature: Adding a new pet into the store
    I want to add a new pet in the petstore
    Its better than let it alone in the streets

  Scenario: Insert a new pet with available status
    Given I set the request body to:
      """
        {
            "id": 90000006,
            "category": {
                "id": 0,
                "name": "string"
            },
            "name": "AlirioTestPet",
            "photoUrls": [
                "string"
            ],
            "tags": [
                {
                "id": 0,
                "name": "string"
                }
            ],
            "status": "available"
        }
      """
    When I send the API request
    Then the response status should be 200
    And the response body should contain:
      """
        {
            "id": 90000006,
            "category": {
                "id": 0,
                "name": "string"
            },
            "name": "AlirioTestPet",
            "photoUrls": [
                "string"
            ],
            "tags": [
                {
                "id": 0,
                "name": "string"
                }
            ],
            "status": "available"
        }
      """