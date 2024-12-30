const { Command } = require('@oclif/core');
const handleCode = require('../helpers/scratch-code');

class DeployCommand extends Command {
  async run() {
    const result = handleCode({ push: true });
    return result;
  }
}

DeployCommand.description = 'Push source code';

module.exports = DeployCommand;
