const { Command, Flags } = require('@oclif/core');
const showLogs = require('../helpers/scratch-log');

class LogCommand extends Command {
  static flags = {
    debug: Flags.boolean({ char: 'd', description: 'Show debug messages only' })
  };

  async run() {
    const { flags } = await this.parse(LogCommand);
    showLogs(flags.debug);
  }
}

LogCommand.description = 'Show remote logs';

module.exports = LogCommand;
