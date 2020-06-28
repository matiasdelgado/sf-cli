const inquirer = require('inquirer');
const { Command, flags } = require('@oclif/command');
const { listOrgs } = require('../helpers/scratch-org-list');
const { deleteOrg, getInfo } = require('../helpers/scratch-org');

class DeleteCommand extends Command {
  async run() {
    const { flags } = this.parse(DeleteCommand);
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

DeleteCommand.description = 'Delete scratch org';

DeleteCommand.flags = {
  select: flags.boolean({ char: 's', description: 'Select scratch org to delete' })
};

module.exports = DeleteCommand;
