const util = require('util');
const exec = util.promisify(require('child_process').exec);

function deleteOrg(username) {
  const userParameter = username ? ` -u ${username}` : '';
  const command = `sfdx force:org:delete${userParameter}`;
  return exec(command);
}

module.exports = deleteOrg;
