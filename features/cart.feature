Feature: Shopping Cart

  As a logged in user  
  I want to add and remove items to my shopping cart  
  So that I can purchase them later

  Background:
    Given I am logged in
    
  @smoke
  Scenario: Add a product to the cart
    When I add the first product to the cart
    Then the cart badge should show 1


  Scenario: Remove a product from the cart
    When I add the first product to the cart
    Then the cart badge should show 1
    When I remove the first product from the cart
    Then the cart badge should not be visible