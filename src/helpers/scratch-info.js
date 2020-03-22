const util = require('util');
const exec = util.promisify(require('child_process').exec);
const logger = require('./logger');

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
  logger.info('\u{1B}[34m%s: \u{1B}[0m    %s', 'Username', username);
  logger.info('\u{1B}[34m%s: \u{1B}[0m    %s', 'Password', password);
  logger.info('\u{1B}[34m%s: \u{1B}[0m%s', 'Instance Url', instanceUrl);
  logger.info('\u{1B}[34m%s: \u{1B}[0m  %s', 'Expiration', expirationDate);
}

function drawMarkdownTable(username, password, instanceUrl, expirationDate) {
  logger.info('|key          |value');
  logger.info('|:---         |:---');
  logger.info('|Username     |', username);
  logger.info('|Password     |', password);
  logger.info('|Instance Url |', instanceUrl);
  logger.info('|Expiration   |', expirationDate);
}
