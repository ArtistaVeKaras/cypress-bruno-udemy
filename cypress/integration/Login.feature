@regression
Feature: Webdriveruniversity Login Page

  I want to login to WEbdriverUniversity

  # @focus
  # Scenario: Login valid credentials
  #   Given I access the WebdriverUnicersity Login Portal page
  #   When I enter a username webdriver
  #   And I enter a password webdriver123
  #   And I click on the login button
  #   Then I should be presented with the following message validation succeeded

  # Scenario: Login with invalid credentials
  #   Given I access the WebdriverUnicersity Login Portal page
  #   When I enter a username webdriver
  #   And I enter a password webdriver555
  #   And I click on the login button
  #   Then I should be presented with the following message validation failed

  Scenario Outline: Login via WebdriverUniversity Login Portal
    Given I access the WebdriverUnicersity Login Portal page
    When I enter a username <username>
    And I enter a password <password>
    And I click on the login button
    Then I should be presented with the following message <message>


    Examples:
      | username  | password     | message              |
      | webdriver | webdriver123 | validation succeeded |
      | webdriver | webdriver555 | validation failed    |

