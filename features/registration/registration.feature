
Feature: User Registration

  Scenario: Valid Registration
    Given I am on the Create An Account page
    When I register with valid details
    Then I should see a registration success message

  Scenario: Invalid Email
    When I register with an invalid email format
    Then I should see an invalid email error message

  Scenario: Missing Password
    When I register without a password
    Then I should see a password required error message
