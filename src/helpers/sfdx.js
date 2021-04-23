const util = require('util');
const exec = util.promisify(require('child_process').exec);

// force:source:push { forceoverwrite: true, json: true }
async function sfdx(command, arguments_ = {}, options) {
  const params = stringify(arguments_);
  const { stderr, stdout } = await exec(`sfdx ${command} ${params}`, options);
  if (stderr && process.env.DEBUG) {
    console.warn(stderr);
  }
  return arguments_.json ? JSON.parse(stdout) : stdout;
}

function stringify(arguments_) {
  if (typeof arguments_ === 'string') {
    return arguments_;
  }

  const params = Object.keys(arguments_).reduce((acc, curr) => {
    acc.push(`--${curr}`);

    if (arguments_[curr] !== true) {
      acc.push(`"${arguments_[curr]}"`);
    }
  }, []);
  return params.join(' ')
}

module.exports = { sfdx };
