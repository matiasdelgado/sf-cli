const { Command, flags } = require('@oclif/command');
const { runTestMethod, runTestClass } = require('../helpers/server-tests');

class TestCommand extends Command {
  async run() {
    const { flags } = this.parse(TestCommand);
    if (flags.classname) {
      return runTestClass(flags.classname);
    }
    if (flags.method) {
      return runTestMethod(flags.method);
    }
  }
}

TestCommand.description = 'Run tests by class or method name';

TestCommand.flags = {
  classname: flags.string({ char: 'c', description: 'Run tests in class' }),
  method: flags.string({ char: 'm', description: 'Run test by method name' })
};

module.exports = TestCommand;
