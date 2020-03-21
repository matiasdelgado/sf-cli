const util = require('util');
const exec = util.promisify(require('child_process').exec);

module.exports = showInfo;

function showInfo(markdown) {
  const command = 'sfdx force:org:display --json';
  return exec(command).then(({ stderr, stdout }) => {
    if (stderr) {
      throw new Error(stderr);
    }
    const {
      result: { username, password, instanceUrl, expirationDate }
    } = JSON.parse(stdout);
    if (markdown) {
      drawMarkdownTable(username, password, instanceUrl, expirationDate);
    } else {
      drawTable(username, password, instanceUrl, expirationDate);
    }
  });
}

function drawTable(username, password, instanceUrl, expirationDate) {
  console.info('\x1b[34m%s: \x1b[0m    %s', 'Username', username);
  console.info('\x1b[34m%s: \x1b[0m    %s', 'Password', password);
  console.info('\x1b[34m%s: \x1b[0m%s', 'Instance Url', instanceUrl);
  console.info('\x1b[34m%s: \x1b[0m  %s', 'Expiration', expirationDate);
}

function drawMarkdownTable(username, password, instanceUrl, expirationDate) {
  console.info('|key          |value');
  console.info('|:---         |:---');
  console.info('|Username     |', username);
  console.info('|Password     |', password);
  console.info('|Instance Url |', instanceUrl);
  console.info('|Expiration   |', expirationDate);
}
