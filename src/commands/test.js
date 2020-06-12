const { Command, flags } = require('@oclif/command');
const { runTestMethod, runTestClass } = require('../helpers/server-tests');

class TestCommand extends Command {
  async run() {
    const { flags } = this.parse(TestCommand);

    if (flags.subject.indexOf('.') > 0) {
      return runTestMethod(flags.subject);
    }

    return runTestClass(flags.subject);
  }
}

TestCommand.description = 'Run tests by class or method name';

TestCommand.flags = {
  subject: flags.string({ char: 's', description: 'Run method or class test' })
};

module.exports = TestCommand;
