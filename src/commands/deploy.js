const { Command } = require('@oclif/core');
const handleCode = require('../helpers/scratch-code');

class DeployCommand extends Command {
  static description = 'Push source code';

  async run() {
    const result = handleCode({ push: true });
    this.exit(result);
  }
}


module.exports = DeployCommand;
