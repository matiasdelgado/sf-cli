const chalk = require('chalk');
const { Command } = require('@oclif/core');
const { getScratchOrgs } = require('../helpers/scratch-org-list');

class ListCommand extends Command {
  async run() {
    const orgs = await getScratchOrgs();
    const aliasLength = Math.max(...orgs.map(org => (org.alias ? org.alias.length : 0)));
    const renderLine = this.renderLineGenerator(12, aliasLength);

    renderLine('Expiration ', 'Alias', 'Scratch Org URL');
    renderLine('---------- ', '-----', '---------------');

    for (const org of orgs) {
      renderLine(org.expirationDate, org.alias, org.instanceUrl, org.isDefaultUsername);
    }
  }

  renderLineGenerator(expirationLength, aliasLength) {
    return (expirationDate, alias, instanceUrl, isDefaultUsername) => {
      const message = `${alias.padEnd(aliasLength)} ${(expirationDate || '').padEnd(expirationLength)} ${instanceUrl}`;
      if (isDefaultUsername) {
        this.log(chalk.blue(message));
      } else {
        this.log(message);
      }
    };
  }
}

ListCommand.description = 'List all available scratch orgs.';

module.exports = ListCommand;
