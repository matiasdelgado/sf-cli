const fs = require('node:fs');

module.exports = checkContext;

function checkContext() {
  return fs.existsSync('./.sfdx');
}
