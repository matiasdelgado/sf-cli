const inquirer = require('inquirer');
const { promisify } = require('node:util');
const exec = promisify(require('node:child_process').exec);
const logger = require('./logger');
const PRODUCTION = 'PRODUCTION';

module.exports = { getScratchOrgs, listOrgs };

async function listOrgs(promptText = 'Open Scratch Org:') {
  const orgs = await getScratchOrgs();
  const choices = orgs.map(org => {
    const aliasLength = Math.max(...orgs.map(org => (org.alias ? org.alias.length : 0)));
    return `${org.expirationDate} ${org.alias.padEnd(aliasLength)} ${org.instanceUrl}${
      org.isDefaultUsername ? ' *' : ''
    }`;
  });

  if (choices.length === 0) {
    logger.info('There are no active scratch orgs');
    return;
  }

  const { choice } = await inquirer.prompt([
    {
      name: 'choice',
      message: promptText,
      type: 'list',
      choices
    }
  ]);

  const index = choices.indexOf(choice);
  return orgs[index];
}

async function getScratchOrgs() {
  const command = 'sf org list --json';
  const { stderr, stdout } = await exec(command);

  if (stderr && !stderr.includes('Warning')) {
    throw new Error(stderr);
  }

  const data = JSON.parse(stdout);
  return [...data.result.nonScratchOrgs, ...data.result.scratchOrgs]
    .filter(org => org.alias !== PRODUCTION)
    .map(o => mapOrgInfo(o))
    .sort((a, b) => {
      if (a.expirationDate < b.expirationDate) return -1;
      if (a.expirationDate > b.expirationDate) return 1;
      return 0;
    });
}

function mapOrgInfo({ alias, instanceUrl, isDefaultUsername, expirationDate, username }) {
  return {
    alias: alias || '',
    instanceUrl,
    isDefaultUsername,
    expirationDate,
    username
  };
}
