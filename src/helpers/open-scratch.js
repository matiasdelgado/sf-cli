const util = require('util');
const exec = util.promisify(require('child_process').exec);

function openOrg(username) {
  const userParam = username ? ` -u ${username}` : '';
  const openCommand = `sfdx force:org:open${userParam}`;
  process.stdout.write('Opening browser...'); // write message and do not add a CRLF
  return exec(openCommand).then(() => process.stdout.write('\x1B[2K')); // remove line
}

module.exports = openOrg;
