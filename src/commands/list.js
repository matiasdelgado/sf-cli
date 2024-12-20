const chalk = require('chalk');
const { Command } = require('@oclif/core');
const { getScratchOrgs } = require('../helpers/scratch-org-list');

class ListCommand extends Command {
  static description = 'List all available scratch orgs.';

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

module.exports = ListCommand;
