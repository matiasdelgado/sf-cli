const spawn = require('child_process').spawn;
const isSalesforceProject = require('./context-validation');

module.exports = handleCode;

function pushToScratch() {
  spawn('sfdx', ['force:source:push', '-f'], { stdio: 'inherit' });
}

function pullFromScratch() {
  spawn('sfdx', ['force:source:pull', '-f'], { stdio: 'inherit' });
}

function handleCode({ pull, push }) {
  if (!isSalesforceProject()) {
    console.info('This command is required to run from within an SFDX project.');
    return;
  }

  if (pull && push) {
    console.info('Pull and push are mutually exclusive options');
    return;
  }

  if (push) {
    return pushToScratch();
  }
  if (pull) {
    return pullFromScratch();
  }
}
