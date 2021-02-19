#url
https://www.automationteststore.com/
http://www.webdriveruniversity.com/

#link for how to select elements
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors

https://www.w3schools.com/xml/xpath_syntax.asp

#selectors with ranorex plugin chrome xtention
##select 'a' link tag with the follow link 
a[href='https://automationteststore.com/index.php?rt=content/contact']

#select 'a' link that ends with the word contact
a[href$='contact']

#select a button with the value title
button[title="Submit"]

#run the test in headless mode
./node_modules/.bin/cypress run

#run the test with electron browser
./node_modules/.bin/cypress run --headed

#runs a specific file
./node_modules/.bin/cypress run --spec cypress/integration/automation-test-store/contact-us.js
