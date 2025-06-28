import report from 'multiple-cucumber-html-reporter';
import open from 'open';

const reportFilePath = 'reports/html/index.html';

report.generate({
  jsonDir: 'reports',
  reportPath: 'reports/html',
  metadata: {
    browser: { name: 'chrome', version: 'stable' },
    device: 'Local test machine',
    platform: { name: 'windows', version: '11' }
  },
  customData: {
    title: 'Proyecto SauceDemo',
    data: [
      { label: 'Proyecto', value: 'saucedemo-pw-cucumber' },
      { label: 'Generado', value: new Date().toLocaleString() }
    ]
  }
});

await open(reportFilePath);