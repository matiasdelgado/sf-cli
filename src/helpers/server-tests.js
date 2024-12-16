const { spawn } = require('child_process');

module.exports = { runTestMethod, runTestClass };

function runTestMethod(method) {
  spawn('sf', ['apex run test', '-w', '100', `--tests=${method}`, '--synchronous'], { stdio: 'inherit' });
}

function runTestClass(classnames) {
  spawn('sf', ['apex run test', '-w 100', `--class-names=${classnames}`, '--code-coverage', '--synchronous'], { stdio: 'inherit' });
}
