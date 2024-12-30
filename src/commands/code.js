const { Command, Flags } = require('@oclif/core');
const handleCode = require('../helpers/scratch-code');

class CodeCommand extends Command {
  static flags = {
    pull: Flags.boolean({ char: 'l', description: 'Pull from scratch org' }),
    push: Flags.boolean({ char: 'p', description: 'Push to scratch org' })
  };

  async run() {
    const { flags } = await this.parse(CodeCommand);
    const result = handleCode(flags);
    this.exit(result);
  }
}

CodeCommand.description = 'Push/pull source code';

module.exports = CodeCommand;
