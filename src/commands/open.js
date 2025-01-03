const { Command, Flags } = require('@oclif/core');
const isSalesforceProject = require('../helpers/context-validation');
const { openOrg } = require('../helpers/scratch-org');
const { listOrgs } = require('../helpers/scratch-org-list');

class OpenCommand extends Command {
  static flags = {
    alias: Flags.string({ char: 'a', description: 'Alias or username of the org to open' }),
    select: Flags.boolean({ char: 's', description: 'Select scratch org to open' })
  };

  async run() {
    const { flags } = await this.parse(OpenCommand);
    if (!isSalesforceProject()) {
      this.log('This command is required to run from within an SFDX project.');
      return;
    }

    if (flags.alias) {
      return openOrg(flags.alias);
    }

    if (flags.select) {
      return listOrgs().then(({ username }) => openOrg(username));
    }

    return openOrg();
  }
}

OpenCommand.description = 'Open the default scratch org in the browser or by picking from the list of available orgs.';

module.exports = OpenCommand;
