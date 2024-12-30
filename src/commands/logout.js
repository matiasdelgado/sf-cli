const { Command, Flags } = require('@oclif/core');
const { logout } = require('../helpers/scratch-org');

class LogoutCommand extends Command {
  static flags = {
    alias: Flags.string({ char: 'a', required: true, description: 'Alias or username' })
  };

  async run() {
    const { flags } = await this.parse(LogoutCommand);
    await logout(flags);
  }
}

LogoutCommand.description = 'Log out from scratch org';

module.exports = LogoutCommand;
