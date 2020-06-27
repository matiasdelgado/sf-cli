const chalk = require('chalk');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const logger = require('./logger');

module.exports = { deleteOrg, getInfo, showInfo, openOrg };

function deleteOrg(username) {
  const userParameter = username ? ` -u ${username}` : '';
  const command = `sfdx force:org:delete${userParameter} --noprompt`;
  return exec(command);
}

async function showInfo(markdown, alias) {
  const info = await getInfo(alias);
  if (markdown) {
    drawMarkdownTable(info);
  } else {
    drawTable(info);
  }
}

async function getInfo(user = null) {
  const userParameter = user ? ` -u ${user}` : '';
  const command = `sfdx force:org:display${userParameter} --json`;
  const { stderr, stdout } = await exec(command);

  if (stderr) {
    throw new Error(stderr);
  }

  const {
    result: { alias, username, password, instanceUrl, expirationDate }
  } = JSON.parse(stdout);

  return { alias, username, password, instanceUrl, expirationDate };
}

function openOrg(username) {
  const userParameter = username ? ` -u ${username}` : '';
  const openCommand = `sfdx force:org:open${userParameter}`;
  process.stdout.write('Opening browser...'); // write message and do not add a CRLF
  return exec(openCommand).then(() => process.stdout.write('\u{1B}[2K')); // remove line
}

function drawTable({ alias, username, password, instanceUrl, expirationDate }) {
  logger.info(chalk.blue('Alias   :     '), alias || '');
  logger.info(chalk.blue('Username:     '), username);
  logger.info(chalk.blue('Password:     '), password);
  logger.info(chalk.blue('Instance Url: '), instanceUrl);
  logger.info(chalk.blue('Expiration:   '), expirationDate);
}

function drawMarkdownTable({ username, password, instanceUrl, expirationDate }) {
  logger.info('|key          |value');
  logger.info('|:---         |:---');
  logger.info('|Username     |', username);
  logger.info('|Password     |', password);
  logger.info('|Instance Url |', instanceUrl);
  logger.info('|Expiration   |', expirationDate);
}
