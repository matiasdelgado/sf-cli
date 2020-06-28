const { Command } = require('@oclif/command');
const showLogs = require('../helpers/scratch-log');

class LogCommand extends Command {
  async run() {
    showLogs();
  }
}

LogCommand.description = 'Show remote logs';

module.exports = LogCommand;
