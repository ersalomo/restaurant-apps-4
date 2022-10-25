const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: 'e2e/**/*.spec.js',
  output: 'e2e/outputs',
  helpers: {
    Puppeteer: {
      url: 'http://localhost:9001',
      show: 1,
      windowSize: '1280x720',
    },
  },
  include: {
    I: './steps_file.js',
  },
  name: 'restaurant-apps-4',
  plugins: {
    retryFailedStep: {
      enabled: 0,
    },
    screenshotOnFail: {
      enabled: true,
    },
  },
};
