const inquirer = require('inquirer');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const logger = require('./logger');

module.exports = orgsList;

function orgsList(promptText = 'Open Scratch Org:') {
  return getScratchOrgs().then(orgs => {
    const choices = orgs.map(org => {
      return `${org.expirationDate} ${org.instanceUrl}${org.isDefaultUsername ? ' *' : ''}`;
    });

    if (choices.length === 0) {
      logger.info('There are no active scratch orgs');
      return;
    }

    return inquirer
      .prompt([
        {
          name: 'instanceUrl',
          message: promptText,
          type: 'list',
          choices
        }
      ])
      .then(({ instanceUrl }) => {
        const index = choices.indexOf(instanceUrl);
        const { username } = orgs[index];
        return username;
      });
  });
}

function getScratchOrgs() {
  const command = 'sfdx force:org:list --json';
  return exec(command).then(({ stderr, stdout }) => {
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
  });
}
