Feature: User Login

  As a SauceDemo user
  I want to log in using my credentials
  So that I can securely access my account and view available products

  @smoke @positive
  Scenario: Login with valid credentials
    Given I am on the login page
    When I log in with username "standard_user" and password "secret_sauce"
    Then I should be redirected to the inventory page

  @negative
  Scenario: Login with invalid credentials
    Given I am on the login page
    When I log in with invalid username "non-existent_user" and password "bad_pass"
    Then I should see a login error message