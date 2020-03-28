const exec = require('child_process').exec;
const openOrg = require('../../src/helpers/scratch-open');

jest.mock('child_process');
jest.mock('util');

describe('Open Scratch', () => {
  beforeEach(() => {
    exec.mockClear();
  });

  it('should pass the username to the command', async () => {
    openOrg('myscratchorg');

    expect(exec).toHaveBeenCalledTimes(1);
    expect(exec.mock.calls[0][0]).toBe('sfdx force:org:open -u myscratchorg');
  });

  it('should not pass a user if missing', async () => {
    openOrg();

    expect(exec).toHaveBeenCalledTimes(1);
    expect(exec.mock.calls[0][0]).toBe('sfdx force:org:open');
  });
});
