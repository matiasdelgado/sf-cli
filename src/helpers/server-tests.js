const { spawn } = require('child_process');

module.exports = { runTestMethod, runTestClass };

function runTestMethod(method) {
  spawn('sf', ['apex', 'run', 'test', '-w', '100', `--tests=${method}`], { stdio: 'inherit' });
}

function runTestClass(classnames) {
  spawn('sf', ['apex', 'run', 'test', '-w', '100', `--class-names=${classnames}`], { stdio: 'inherit' });
}
