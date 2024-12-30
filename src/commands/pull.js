const { Command } = require('@oclif/core');
const handleCode = require('../helpers/scratch-code');

class PullCommand extends Command {
  async run() {
    const result = handleCode({ pull: true });
    this.exit(result);
  }
}

PullCommand.description = 'Pull source code';

module.exports = PullCommand;
