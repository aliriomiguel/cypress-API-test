Feature: I search for available pets
    I want to check about the 
    available pets in the petstore

    Im getting available pets from my store
    Scenario: Get available pets
        Given I send a GET request
        When the response status should be 200
        Then the response should contain pets