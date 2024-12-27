const { spawn } = require('node:child_process');

module.exports = showLogs;

function showLogs(debug) {
  if (debug) {
    const sfdxProcess = spawn('sfdx', ['force:apex:log:tail', '--color'], { stdio: ['ignore', 'pipe', 'ignore'] });
    spawn('grep', ['USER_DEBUG'], { stdio: [sfdxProcess.stdio[1], process.stdout, process.stdout] });
  } else {
    spawn('sfdx', ['force:apex:log:tail', '--color'], { stdio: 'inherit' });
  }
}
