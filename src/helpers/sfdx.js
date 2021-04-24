const util = require('util');
const exec = util.promisify(require('child_process').exec);
const logger = require('./logger');

// force:source:push { forceoverwrite: true, json: true }
async function sfdx(command, arguments_ = {}, options) {
  const parameters = stringify(arguments_);
  const { stderr, stdout } = await exec(`sfdx ${command} ${parameters}`, options);
  if (stderr && process.env.DEBUG) {
    logger.warn(stderr);
  }
  return arguments_.json ? JSON.parse(stdout) : stdout;
}

function stringify(arguments_) {
  if (typeof arguments_ === 'string') {
    return arguments_;
  }

  const parameters = Object.keys(arguments_).reduce((accumulator, current) => {
    accumulator.push(`--${current}`);

    if (arguments_[current] !== true) {
      accumulator.push(`"${arguments_[current]}"`);
    }

    return accumulator;
  }, []);
  return parameters.join(' ');
}

module.exports = { sfdx };
