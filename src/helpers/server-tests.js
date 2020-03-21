const { spawn } = require('child_process');

module.exports = { runTestMethod, runTestClass };

function runTestMethod(method) {
  spawn('sfdx', ['force:apex:test:run', '-w', '100', `--tests=${method}`], { stdio: 'inherit' });
}

function runTestClass(classnames) {
  spawn('sfdx', ['force:apex:test:run', '-w 100', `--classnames=${classnames}`], { stdio: 'inherit' });
}
