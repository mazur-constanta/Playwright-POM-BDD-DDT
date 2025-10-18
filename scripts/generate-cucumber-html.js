const reporter = require('cucumber-html-reporter');
const dayjs = require('dayjs');

const currentDate = dayjs().format('DD/MM/YYYY HH:mm:ss');

const options = {
  theme: 'bootstrap',
  jsonFile: './cucumber-report.json',
  output: './cucumber-report.html',
  reportSuiteAsScenarios: true,
  launchReport: true,
  name: 'Automation_Playwright',
  brandTitle: `Cucumber Report - ${currentDate}`,
};

reporter.generate(options);