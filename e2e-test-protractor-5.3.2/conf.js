// conf.js
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['empData-spec.js'],
  capabilities: {
    browserName: 'firefox'
  }
}