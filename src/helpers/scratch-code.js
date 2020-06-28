const exec = require('child_process').execSync;
const isSalesforceProject = require('./context-validation');
const logger = require('./logger');

module.exports = handleCode;

function pushToScratch() {
  try {
    exec('sfdx force:source:push -f', { stdio: 'inherit' });
    return 0;
  } catch (error) {
    return error.status || 1;
  }
}

function pullFromScratch() {
  try {
    exec('sfdx force:source:pull -f');
    return 0;
  } catch (error) {
    return error.status || 1;
  }
}

function handleCode({ pull, push }) {
  if (!isSalesforceProject()) {
    logger.info('This command is required to run from within an SFDX project.');
    return;
  }

  if (!pull && !push) {
    logger.info('Missing parameter: --pull, --push');
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
