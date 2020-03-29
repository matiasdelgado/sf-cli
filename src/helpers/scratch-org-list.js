const inquirer = require('inquirer');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const logger = require('./logger');

module.exports = listOrgs;

async function listOrgs(promptText = 'Open Scratch Org:') {
  const orgs = await getScratchOrgs();
  const choices = orgs.map(org => {
    return `${org.expirationDate} ${org.instanceUrl}${org.isDefaultUsername ? ' *' : ''}`;
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
  return data.result.scratchOrgs.map(({ instanceUrl, isDefaultUsername, expirationDate, username }) => ({
    instanceUrl,
    isDefaultUsername,
    expirationDate,
    username
  }));
}
