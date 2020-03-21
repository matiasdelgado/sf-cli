const spawn = require('child_process').spawn;

module.exports = showLogs;

function showLogs() {
  const sfdxProcess = spawn('sfdx', ['force:apex:log:tail', '--color'], { stdio: ['ignore', 'pipe', 'ignore'] });
  spawn('grep', ['USER_DEBUG'], { stdio: [sfdxProcess.stdio[1], process.stdout, process.stdout] });
}
