const { Command, flags } = require('@oclif/command');
const showLogs = require('../helpers/scratch-log');

class LogCommand extends Command {
  async run() {
    const { flags } = this.parse(LogCommand);
    this.log('flags', flags);
    showLogs();
  }
}

LogCommand.description = 'Show remote logs';

LogCommand.flags = {
  debug: flags.boolean({ char: 'd', description: 'Show only debug messages' })
};

module.exports = LogCommand;
