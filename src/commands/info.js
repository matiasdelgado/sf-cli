const { Command, Flags } = require('@oclif/core');
const { showInfo } = require('../helpers/scratch-org');

class InfoCommand extends Command {
  static flags = {
    alias: Flags.string({ char: 'a', description: 'Alias or username' }),
    markdown: Flags.boolean({ char: 'm', description: 'Generates MD code' })
  };

  async run() {
    const { flags } = await this.parse(InfoCommand);
    showInfo(flags.markdown, flags.alias);
  }
}

InfoCommand.description = 'Display current scratch org information';

module.exports = InfoCommand;
