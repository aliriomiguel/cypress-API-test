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