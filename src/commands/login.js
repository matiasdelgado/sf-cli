const { Command, Flags } = require('@oclif/core');
const { login } = require('../helpers/scratch-log');

class LoginCommand extends Command {
  static description = 'Log in to scratch org';
  static flags = {
    alias: Flags.string({ char: 'a', description: 'Alias or username' }),
    url: Flags.string({ char: 'u', description: 'Instance URL' }),
  };

  async run() {
    const { flags } = await this.parse(LoginCommand);
    login(flags);
  }
}

module.exports = LoginCommand;
