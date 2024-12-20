const { Command } = require('@oclif/core');
const handleCode = require('../helpers/scratch-code');

class PullCommand extends Command {
  static description = 'Pull source code';

  async run() {
    const result = handleCode({ pull: true });
    this.exit(result);
  }
}

module.exports = PullCommand;
