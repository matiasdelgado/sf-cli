const inquirer = require('inquirer');
const { Command, Flags } = require('@oclif/core');
const { listOrgs } = require('../helpers/scratch-org-list');
const { deleteOrg, getInfo } = require('../helpers/scratch-org');

class DeleteCommand extends Command {
  static description = 'Delete scratch org';
  static flags = {
    select: Flags.boolean({ char: 's', description: 'Select scratch org to delete' })
  };

  async run() {
    const { flags } = await this.parse(DeleteCommand);
    const { instanceUrl, username } = flags.select ? await listOrgs('Select org to delete') : await getInfo();

    const answer = await inquirer.prompt([
      {
        name: 'confirm',
        message: `Are you sure you want to delete the scratch org ${instanceUrl}`,
        type: 'confirm',
        default: false
      }
    ]);

    if (answer.confirm) {
      await deleteOrg(username);
    }
  }
}

module.exports = DeleteCommand;
