const { Command, Flags } = require('@oclif/core');
const { runTestMethod, runTestClass } = require('../helpers/server-tests');

class TestCommand extends Command {
  static description = 'Run tests by class or method name';
  static flags = {
    subject: Flags.string({ char: 's', description: 'Run method or class test' })
  };

  async run() {
    const { flags } = await this.parse(TestCommand);

    if (flags.subject.indexOf('.') > 0) {
      return runTestMethod(flags.subject);
    }

    return runTestClass(flags.subject);
  }
}

module.exports = TestCommand;
