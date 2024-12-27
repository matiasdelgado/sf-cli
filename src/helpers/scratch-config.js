const { promisify } = require('node:util');
const exec = promisify(require('node:child_process').exec);

function setDefault(username) {
  const setCommand = `sf config set target-org ${username}`;
  return exec(setCommand).then(() => username);
}

module.exports = {
  setDefault
};
