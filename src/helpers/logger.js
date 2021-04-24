module.exports = { info, warn };

function info(...texts) {
  // eslint-disable-next-line no-console
  console.info(...texts);
}

function warn(...texts) {
  // eslint-disable-next-line no-console
  console.warn(...texts);
}
