const { Command, flags } = require('@oclif/command');
const isSalesforceProject = require('../helpers/context-validation');
const { openOrg } = require('../helpers/scratch-org');
const listOrgs = require('../helpers/scratch-org-list');

class OpenCommand extends Command {
  async run() {
    const { flags } = this.parse(OpenCommand);
    if (!isSalesforceProject() && flags.defaultOrg) {
      this.log('This command is required to run from within an SFDX project.');
      return;
    }

    return flags.defaultOrg ? openOrg() : listOrgs().then(({ username }) => openOrg(username));
  }
}

OpenCommand.description =
  'Open a scratch org in the browser by username or by picking from the list of available orgs.';

OpenCommand.flags = {
  defaultOrg: flags.boolean({ char: 'd', description: 'Open default org' })
};

module.exports = OpenCommand;
