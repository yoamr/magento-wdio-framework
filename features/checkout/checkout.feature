
Feature: Checkout Process

  Scenario: Valid Checkout
    Given I have a product in my cart
    When I checkout with valid information
    Then I should see an order confirmation message

  Scenario: Missing Shipping Address
    Given I have a product in my cart
    When I try to checkout without entering shipping address
    Then I should see a shipping address error

  Scenario: Guest Checkout
    Given I have a product in my cart
    When I checkout as a guest
    Then I should see an order confirmation without logging in
