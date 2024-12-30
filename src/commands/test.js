const { Command, Args } = require('@oclif/core');
const { runTestMethod, runTestClass } = require('../helpers/server-tests');

class TestCommand extends Command {
  static args = {
    subject: Args.string()
  };

  async run() {
    const { args } = await this.parse(TestCommand);

    if (args.subject.indexOf('.') > 0) {
      return runTestMethod(args.subject);
    }

    return runTestClass(args.subject);
  }
}

TestCommand.description = 'Run tests by class or method name';

module.exports = TestCommand;
