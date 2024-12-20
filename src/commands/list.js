const chalk = require('chalk');
const { Command } = require('@oclif/core');
const { getScratchOrgs } = require('../helpers/scratch-org-list');

class ListCommand extends Command {
  static description = 'List all available scratch orgs.';

  async run() {
    const orgs = await getScratchOrgs();
    const aliasLength = Math.max(...orgs.map(org => (org.alias ? org.alias.length : 0)));
    const renderLine = this.renderLineGenerator(12, aliasLength);

    renderLine('Expiration ', 'Alias', 'Scratch Org URL');
    renderLine('---------- ', '-----', '---------------');

    orgs.forEach(org => {
      renderLine(org.expirationDate, org.alias, org.instanceUrl, org.isDefaultUsername);
    });
  }

  renderLineGenerator(expirationLength, aliasLength) {
    const _this = this;
    return function renderLine(expirationDate, alias, instanceUrl, isDefaultUsername) {
      const message = `${alias.padEnd(aliasLength)} ${(expirationDate || '').padEnd(expirationLength)} ${instanceUrl}`;
      if (isDefaultUsername) {
        _this.log(chalk.blue(message));
      } else {
        _this.log(message);
      }
    }
  }
}

module.exports = ListCommand;
