const { Args, Command, Flags } = require('@oclif/core');
const isSalesforceProject = require('../helpers/context-validation');
const { openOrg } = require('../helpers/scratch-org');
const { listOrgs } = require('../helpers/scratch-org-list');
const { setDefault } = require('../helpers/scratch-config');

class SwitchCommand extends Command {
  static args = {
    alias: Args.string()
  };

  static flags = {
    open: Flags.boolean({ char: 'o', description: 'Open the scratch org in the browser' })
  };

  async run() {
    const { args, flags } = await this.parse(SwitchCommand);
    const isProject = isSalesforceProject();

    if (!isProject) {
      this.log('This folder is not a salesforce solution, cannot switch the scratch orgs.');
      return;
    }

    let { alias } = args;
    if (!alias) {
      const { username } = await listOrgs('Choose Scratch Org:');
      alias = username;
    }

    await setDefault(alias);
    this.log(`Scratch org ${alias} marked as default`);
    if (flags.open) {
      await openOrg(alias);
    }
  }
}

SwitchCommand.description = 'Change the default scratch org';

module.exports = SwitchCommand;
