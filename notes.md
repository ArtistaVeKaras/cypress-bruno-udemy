# url

<https://www.automationteststore.com/>
<http://www.webdriveruniversity.com/>

## Link for how to select elements

<https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors>s>
<https://www.w3schools.com/xml/xpath_syntax.asp>

## selectors with ranorex plugin chrome extension

## select 'a' link tag with the follow link

a[href='https://automationteststore.com/index.php?rt=content/contact']

## Select 'a' link that ends with the word contact

a[href$='contact']

## Select a button with the value title

button[title="Submit"]

## Run the test in headless mode

./node_modules/.bin/cypress run

## Run the test with electron browser

./node_modules/.bin/cypress run --headed

## Runs a specific file

./node_modules/.bin/cypress run --spec cypress/integration/automation-test-store/contact-us.js

## Override env variable

./node_modules/.bin/cypress run --browser chrome --spec cypress/integration/webdriver-unit/contactus.js --env firstName=tim
