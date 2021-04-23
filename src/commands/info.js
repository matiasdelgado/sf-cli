const { Command, flags } = require('@oclif/command');
const { showInfo } = require('../helpers/scratch-org');

class InfoCommand extends Command {
  async run() {
    const { flags } = this.parse(InfoCommand);
    showInfo(flags.markdown, flags.alias);
  }
}

InfoCommand.description = 'Display current scratch org information';

InfoCommand.flags = {
  alias: flags.string({ char: 'a', description: 'Alias or username' }),
  markdown: flags.boolean({ char: 'm', description: 'Generates MD code' })
};

module.exports = { InfoCommand };
