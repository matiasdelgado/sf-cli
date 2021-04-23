const { sfdx } = require('./sfdx');

function setDefault(username) {
  return sfdx('force:config:set', `defaultusername=${username}`);
}

module.exports = {
  setDefault
};
