const chalk = require('chalk');
const { Command } = require('@oclif/command');
const { getScratchOrgs } = require('../helpers/scratch-org-list');

class ListCommand extends Command {
  async run() {
    const orgs = await getScratchOrgs();
    const aliasLength = Math.max(...orgs.map(org => (org.alias ? org.alias.length : 0)));
    orgs.forEach(org => {
      const message = `${org.expirationDate || ''.padEnd(10)} ${org.alias.padEnd(aliasLength)} ${org.instanceUrl}`;
      if (org.isDefaultUsername) {
        this.log(chalk.blue(message));
      } else {
        this.log(message);
      }
    });
  }
}

ListCommand.description = 'List all available scratch orgs.';

ListCommand.flags = {};

module.exports = ListCommand;
