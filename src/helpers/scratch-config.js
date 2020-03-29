const util = require('util');
const exec = util.promisify(require('child_process').exec);

function setDefault(username) {
  const setCommand = `sfdx force:config:set defaultusername=${username}`;
  return exec(setCommand).then(() => username);
}

module.exports = {
  setDefault
};
