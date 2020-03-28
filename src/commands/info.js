const { Command, flags } = require('@oclif/command');
const { showInfo } = require('../helpers/scratch-info');

class InfoCommand extends Command {
  async run() {
    const { flags } = this.parse(InfoCommand);
    showInfo(flags.markdown);
  }
}

InfoCommand.description = 'Display current scratch org url';

InfoCommand.flags = {
  markdown: flags.boolean({ char: 'm', description: 'Generates MD code' })
};

module.exports = InfoCommand;
