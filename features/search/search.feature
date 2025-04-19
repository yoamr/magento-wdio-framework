
Feature: Product Search Functionality

  Scenario: Search by Keyword
    Given I am on the home page
    When I search for "Jacket"
    Then I should see products related to "Jacket"

  Scenario: Search with No Results
    When I search for "dsfdgfdg"
    Then I should see a "no results" message
