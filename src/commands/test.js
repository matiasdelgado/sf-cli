const { Command, Args } = require('@oclif/core');
const { runTestMethod, runTestClass } = require('../helpers/server-tests');

class TestCommand extends Command {
  static description = 'Run tests by class or method name';
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

module.exports = TestCommand;
