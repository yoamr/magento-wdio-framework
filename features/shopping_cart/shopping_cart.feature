
Feature: Shopping Cart Functionality

  Scenario: Add Product to Cart
    Given I am on the What's New page
    When I add a Jacket to the cart
    Then I should see a success message for adding to cart

  Scenario: Verify Product Added to Cart
    When I view the cart
    Then I should see the product details in the cart

  Scenario: Update Product Quantity Details
    When I update the product quantity in the cart
    Then I should see a cart update success message

  Scenario: Delete Product from Cart
    When I remove the product from the cart
    Then the product should no longer be in the cart
