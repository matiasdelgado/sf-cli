const inquirer = require('inquirer');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const logger = require('./logger');

module.exports = { getScratchOrgs, listOrgs };

async function listOrgs(promptText = 'Open Scratch Org:') {
  const orgs = await getScratchOrgs();
  const choices = orgs.map(org => {
    const aliasLength = Math.max(...orgs.map(org => (org.alias ? org.alias.length : 0)));
    return `${org.expirationDate} ${org.alias.padEnd(aliasLength)} ${org.instanceUrl}${org.isDefaultUsername ? ' *' : ''}`;
  });

  if (choices.length === 0) {
    logger.info('There are no active scratch orgs');
    return;
  }

  const { instanceUrl } = await inquirer.prompt([
    {
      name: 'instanceUrl',
      message: promptText,
      type: 'list',
      choices
    }
  ]);

  const index = choices.indexOf(instanceUrl);
  const { username } = orgs[index];
  return { instanceUrl, username };
}

async function getScratchOrgs() {
  const command = 'sfdx force:org:list --json';
  const { stderr, stdout } = await exec(command);

  if (stderr) {
    throw new Error(stderr);
  }

  const data = JSON.parse(stdout);
  return data.result.scratchOrgs
    .map(({ alias, instanceUrl, isDefaultUsername, expirationDate, username }) => ({
      alias: alias || '',
      instanceUrl,
      isDefaultUsername,
      expirationDate,
      username
    }))
    .sort((a, b) => {
      if (a.expirationDate < b.expirationDate) return -1;
      if (a.expirationDate > b.expirationDate) return 1;
      return 0;
    });
}
