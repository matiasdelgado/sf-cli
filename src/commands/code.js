const { Command, flags } = require('@oclif/command');
const handleCode = require('../helpers/scratch-code');

class CodeCommand extends Command {
  async run() {
    const { flags } = this.parse(CodeCommand);
    const result = handleCode(flags);
    this.exit(result);
  }
}

CodeCommand.description = 'Push/pull source code';

CodeCommand.flags = {
  pull: flags.boolean({ char: 'l', description: 'Pull from scratch org' }),
  push: flags.boolean({ char: 'p', description: 'Push to scratch org' })
};

module.exports = CodeCommand;
