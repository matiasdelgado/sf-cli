const chalk = require('chalk');
const { exec } = require('node:child_process');
const isSalesforceProject = require('./context-validation');
const logger = require('./logger');

module.exports = {
  deleteOrg,
  getInfo,
  login,
  logout,
  openOrg,
  showInfo
};

function deleteOrg(username) {
  const userParameter = username ? ` -o ${username}` : '';
  const command = `sf org delete scratch${userParameter} --no-prompt`;
  return exec(command);
}

async function showInfo(markdown, alias) {
  if (!isSalesforceProject()) {
    logger.info('This command is required to run from within an SFDX project.');
    return;
  }

  try {
    const info = await getInfo(alias);
    if (markdown) {
      drawMarkdownTable(info);
    } else {
      drawTable(info);
    }
  } catch (error) {
    console.error(error);
  }
}

async function getInfo(user = null) {
  const userParameter = user ? ` -o ${user}` : '';
  const command = `sf org display${userParameter} --json`;
  const { stderr, stdout } = await exec(command);

  if (stderr) {
    console.error(stderr);
  }

  const {
    result: { alias, username, password, instanceUrl, expirationDate }
  } = JSON.parse(stdout);

  return { alias, username, password, instanceUrl, expirationDate };
}

function openOrg(username) {
  const userParameter = username ? ` -o ${username}` : '';
  const openCommand = `sf org open${userParameter}`;
  process.stdout.write('Opening browser...'); // write message and do not add a CRLF
  return exec(openCommand).then(() => process.stdout.write('\u{1B}[2K')); // remove line
}

function drawTable({ alias, username, password, instanceUrl, expirationDate }) {
  logger.info(chalk.blue('Alias:        '), alias || '');
  logger.info(chalk.blue('Username:     '), username);
  if (password) {
    logger.info(chalk.blue('Password:     '), password);
  }

  logger.info(chalk.blue('Instance Url: '), instanceUrl);
  logger.info(chalk.blue('Expiration:   '), expirationDate);
}

function drawMarkdownTable({ username, password, instanceUrl, expirationDate }) {
  logger.info('|key          |value');
  logger.info('|:---         |:---');
  logger.info('|Username     |', username);
  if (password) {
    logger.info('|Password     |', password ? password.replaceAll('|', String.raw`\|`) : '');
  }

  logger.info('|Instance Url |', instanceUrl);
  logger.info('|Expiration   |', expirationDate);
}

async function logout({ alias }) {
  const userParameter = alias ? `-o ${alias}` : '';
  const logoutCmd = `sf auth logout ${userParameter} --no-prompt`;
  process.stdout.write('Logging out from scratch org'); // write message and do not add a CRLF
  return exec(logoutCmd);
}

async function login({ url, alias }) {
  const loginCmd = `sf org login web --instance-url ${url} --alias ${alias}`;
  process.stdout.write('Logging in to scratch org');
  return exec(loginCmd);
}
