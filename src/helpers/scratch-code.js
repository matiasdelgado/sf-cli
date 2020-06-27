const exec = require('child_process').execSync;
const spawn = require('child_process').spawn;
const isSalesforceProject = require('./context-validation');
const logger = require('./logger');

module.exports = handleCode;

function pushToScratch() {
  spawn('sfdx', ['force:source:push', '-f'], { stdio: 'inherit' });
  // const result = exec('sfdx force:source:push -f');
  // return result.error;
}

function pullFromScratch() {
  spawn('sfdx', ['force:source:pull', '-f'], { stdio: 'inherit' });
}

function handleCode({ pull, push }) {
  if (!isSalesforceProject()) {
    logger.info('This command is required to run from within an SFDX project.');
    return;
  }

  if (pull && push) {
    logger.info('Pull and push are mutually exclusive options');
    return;
  }

  if (push) {
    return pushToScratch();
  }
  if (pull) {
    return pullFromScratch();
  }
}
