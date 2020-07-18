const { Command, flags } = require('@oclif/command');
const showLogs = require('../helpers/scratch-log');

class LogCommand extends Command {
  async run() {
    const { flags } = this.parse(LogCommand);
    showLogs(flags.debug);
  }
}

LogCommand.description = 'Show remote logs';

LogCommand.flags = {
  debug: flags.boolean({ char: 'd', description: 'Show debug messages only' })
};

module.exports = LogCommand;
