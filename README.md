# cypress-test
A Cypress test I made from a tech interview. I did add a bunch of cool stuff too, if you're looking to understand how Cypress and Cucumber works this is your repo (I even added reports with screenshots)


How does it works? 

Ok so you want to have Cypress with Cucumber in your automation project.

We first need to add them to a new project folder, in my case I named that folder cypress-test

There we install a couple of packages using npm, cypress and cypress-cucumber-processor, this both packages include the cypress framework and cypress-cucumber-preprocessor allows you to run gherkin-syntaxed specs with cypress

this is the command:
```
npm install cypress cypress-cucumber-preprocessor
```
We needed to install a couple of packages also for the reports

```
npm install multiple-cucumber-html-reporter 
```
```
npm install cucumber-html-reporter
```

We must add this line to the package.json

```
"cypress-cucumber-preprocessor": {
    "nonGlobalStepDefinitions": true,
    "cucumberJson": {
      "generate": true,
      "outputFolder": "cypress/cucumber-json",
      "filePrefix": "",
      "fileSuffix": ".cucumber"
    }
 }
```
This will allow us to detect the .feature files in our file structure (with the "nonGlobalStepDefinitions": true) and in our case we also added the option to generate the cucumber json file which will allow us to generate the report later

With that already installed we can now set our cypress.config.js file in the root folder

This would be the content in the cypress.config.js (the video and videosFolder variables are optional)

```
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/integration/**/*.feature',
    supportFile: 'cypress/support/index.js'
  },
  video: true,
  videosFolder: "videos"
})
```

I recommend to paste this code into a plugins/index.js directory 

```
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = (on, config) => {

on("file:preprocessor", cucumber());

};
```

in the support folder we added a code to add screenshots to our report, you can check it out.

****************************

So we have now our files for our framework set. I did create a couple of scenarios following these assignments:

The objective of the test is to see the ability to create an automation
environment, along with the automation of two simple tests, one positive
and one negative, and the reporting of the results.
Automate:
- Open google.es
- Search Apple
- More than 100,000 results [OK]
- Less than 10,000 results [NOK]
- Report the results
Make a detailed readme of installation and use
Javascript preferred, but do it however you want
Gherkin preferred, but do it how you want

In the cypress/integration folder I created the Search.feature file with the test cases in gherkin

```
Feature: Search for Apple in Google.es

    Im searching for Apple in Google.es
    Scenario: Search Apple and check results higher than 100000
        Given I visit Google.es
        When I search for Apple
        And I check if I got More than 100000 results
    
    Scenario: Search Apple and check results less than 10000
        Given I visit Google.es
        When I search for Apple
        And I check if I got Less than 10000 results
```

And in the cypress/integration/Search I created the search.specs.js which contains the steps definitions for our test

```
Given("I visit Google.es", () => {
    cy.visit("http://google.es");
    cy.get("#L2AGLb > .QS5gu").click();
});
When("I search for Apple", () => {
    cy.get('input[name="q"]').type("Apple{enter}");
});
And("I check if I got More than 100000 results", () => {
    cy.get("#result-stats").then(($result) => {
        var txt = $result.text();
        var result = txt.substring(0, txt.indexOf('('));
        var numb = result.match(/\d/g);
        numb = numb.join("");
        cy.log(numb);
        

        expect(parseInt(numb)).to.be.gt(100000);
    });
});
And("I check if I got Less than 10000 results", () => {
    cy.get("#result-stats").then(($result) => {
        var txt = $result.text();
        var result = txt.substring(0, txt.indexOf('('));
        var numb = result.match(/\d/g);
        numb = numb.join("");
        cy.log(numb);
        

        expect(parseInt(numb)).to.be.lt(10000);
    });
})

```

with that set we can run our test with 

```
npm run test
```
(check the scripts in the package.json file, the main command is npm cypress run)

after the execution is made we can generate the report using

```
node cucumber-html-reports.js
```

Which will execute this script in order to generate the report from the cucumber.json file generated after the execution of the test:

```
const report = require("multiple-cucumber-html-reporter");
report.generate({
    jsonDir: "cypress/cucumber-json",  // ** Path of .json file **//
    reportPath: "./reports/cucumber-html-report.html",
    metadata: {
        browser: {
            name: "chrome",
            version: "92",
        },
        device: "Local test machine",
        platform: {
        name: "windows",
        version: "11",
        },
    },
});

```

You can check for an example in the report folder

:D






















