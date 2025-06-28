import { resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, '..');

export default {
  default: {
    import: [
      resolve(__dirname, 'features/step-definitions/**/*.js'),
      resolve(__dirname, 'support/**/*.js')
    ],
    format: [
      'progress',
      'json:reports/cucumber-report.json'
    ],
    paths: ['features/**/*.feature']
  }
};