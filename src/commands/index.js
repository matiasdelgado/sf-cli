const code = require('./code');
const deleteCmd = require('./delete');
const info = require('./info');
const list = require('./list');
const log = require('./log');
const open = require('./open');
const switchCmd = require('./switch');
const test = require('./test');

module.exports = {
  code,
  delete: deleteCmd,
  info,
  list,
  log,
  open,
  switch: switchCmd,
  test
};
