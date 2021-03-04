# url

<https://www.automationteststore.com/>
<http://www.webdriveruniversity.com/>

## Course cypress version  4.12.1.

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

## Run test and records videos

./node_modules/.bin/cypress run --spec cypress/integration/webdriver-unit/contactus.js

## Cypress DashboardKey

8ed5fa4c-e487-431b-a423-62d7f40b1775
./node_modules/.bin/cypress run --record --key 8ed5fa4c-e487-431b-a423-62d7f40b1775

## Run your test scripts from the package.json file

npm run triggerAllTests-headless //works
npm run triggerAllTests-headed // works
npm run triggerAllTests-chrome //works
npm run triggerAllTests-dashboard
npm run triggerAllTests-webdriver-uni
npm run triggerAllTests-automation-dashboard
npm run cypress-multi-browser // run test with multi browsers
npm run delete-mochawesome-report //this works

## Merge junit results

npx junit-merge -d cypress/results/junit -o cypress/results/junit/results.xml

## Merge moachwasome results

npx mochawesome-merge cypress/results/mochawesome/*.json > mochawesome.json && npx marge mochawesome.json

## Use values store in the config file

npx cypress open --env configFile=staging

## Run test with the configFile configuration

 npx cypress run --spec cypress/integration/webdriver-uni/contactus.js --env configFile=staging

 ## Retries test if test fails

 CYPRESS_RETRIES=2 npm run triggerAllTests-automation-autostore
