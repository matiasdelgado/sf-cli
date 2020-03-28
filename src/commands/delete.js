const inquirer = require('inquirer');
const { Command, flags } = require('@oclif/command');
const listOrgs = require('../helpers/orgs-list');
const deleteOrg = require('../helpers/scratch-delete');
const { getInfo } = require('../helpers/scratch-info');

class DeleteCommand extends Command {
  async run() {
    const { flags } = this.parse(DeleteCommand);
    const { instanceUrl, username } = flags.defaultOrg ? await getInfo() : await listOrgs('Select org to delete');

    const answer = await inquirer.prompt([
      {
        name: 'confirm',
        message: `Are you sure you want to delete the scratch org ${instanceUrl}`,
        type: 'confirm',
        default: false
      }
    ]);

    if (answer) {
      await deleteOrg(username);
    }
  }
}

DeleteCommand.description = 'Delete scratch org';

DeleteCommand.flags = {
  defaultOrg: flags.boolean({ char: 'd', description: 'Current scratch org' })
};

module.exports = DeleteCommand;
