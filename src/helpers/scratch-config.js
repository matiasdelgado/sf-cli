const util = require('util');
const exec = util.promisify(require('child_process').exec);

function setDefault(username) {
  const setCommand = `sf config set target-org ${username}`;
  return exec(setCommand).then(() => username);
}

module.exports = {
  setDefault
};
