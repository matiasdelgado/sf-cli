const { Command, Flags } = require('@oclif/core');
const isSalesforceProject = require('../helpers/context-validation');
const { openOrg } = require('../helpers/scratch-org');
const { listOrgs } = require('../helpers/scratch-org-list');
const { setDefault } = require('../helpers/scratch-config');

class SwitchCommand extends Command {
  static description = 'Change the default scratch org';
  static flags = {
    open: Flags.boolean({ char: 'o', description: 'Open the scratch org in the browser' })
  };

  async run() {
    const { flags } = await this.parse(SwitchCommand);
    const isProject = isSalesforceProject();

    if (!isProject) {
      this.log('This folder is not a salesforce solution, cannot switch the scratch orgs.');
      if (!flags.open) {
        return;
      }
    }

    const { username } = await listOrgs('Choose Scratch Org:');
    if (isProject) {
      await setDefault(username);
    }
    if (flags.open) {
      await openOrg(username);
    }
  }
}

module.exports = SwitchCommand;
