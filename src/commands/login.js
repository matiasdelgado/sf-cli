const { Command, Flags } = require('@oclif/core');
const { login } = require('../helpers/scratch-org');

class LoginCommand extends Command {
  static flags = {
    alias: Flags.string({ char: 'a', required: true, description: 'Alias or username' }),
    url: Flags.string({ char: 'u', required: true, description: 'Instance URL' })
  };

  async run() {
    const { flags } = await this.parse(LoginCommand);
    await login(flags);
  }
}

LoginCommand.description = 'Log in to scratch org';

module.exports = LoginCommand;
