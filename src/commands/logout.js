const { Command, Flags } = require('@oclif/core');
const { logout } = require('../helpers/scratch-org');

class LogoutCommand extends Command {
  static description = 'Log out from scratch org';
  static flags = {
    alias: Flags.string({ char: 'a', required: true, description: 'Alias or username' })
  };

  async run() {
    const { flags } = await this.parse(LogoutCommand);
    await logout(flags);
  }
}

module.exports = LogoutCommand;
