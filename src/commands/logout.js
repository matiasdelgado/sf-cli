const { Command } = require('@oclif/core');
const { logout } = require('../helpers/scratch-log');

class LogoutCommand extends Command {
  static description = 'Log out from scratch org';

  async run() {
    const { flags } = await this.parse(LogoutCommand);
    logout(flags);
  }
}


module.exports = LogoutCommand;
