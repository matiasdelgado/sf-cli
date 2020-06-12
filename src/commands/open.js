const { Command, flags } = require('@oclif/command');
const isSalesforceProject = require('../helpers/context-validation');
const { openOrg } = require('../helpers/scratch-org');
const { listOrgs } = require('../helpers/scratch-org-list');

class OpenCommand extends Command {
  async run() {
    const { flags } = this.parse(OpenCommand);
    if (!isSalesforceProject() && !flags.select) {
      this.log('This command is required to run from within an SFDX project.');
      return;
    }

    return flags.select ? listOrgs().then(({ username }) => openOrg(username)) : openOrg();
  }
}

OpenCommand.description = 'Open the default scratch org in the browser or by picking from the list of available orgs.';

OpenCommand.flags = {
  select: flags.boolean({ char: 's', description: 'Select scratch org to open' })
};

module.exports = OpenCommand;
