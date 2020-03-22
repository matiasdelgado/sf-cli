const inquirer = require('inquirer');
const exec = require('child_process').exec;
const orgsList = require('../../src/helpers/orgs-list');

jest.mock('child_process');
jest.mock('util');
jest.mock('../../src/helpers/logger');

describe('Orgs list', () => {
  beforeEach(() => {
    inquirer.prompt.mockClear();
    inquirer.prompt.mockResolvedValue({ instanceUrl: '1891-09-28 http://test-scratch.com *' });
    exec.mockClear();
  });

  it('should get the list of orgs from SF and return the selection', async () => {
    exec.mockResolvedValue({
      stdout: JSON.stringify({
        result: {
          scratchOrgs: [
            {
              instanceUrl: 'http://test-scratch.com',
              isDefaultUsername: 'yes',
              expirationDate: '1891-09-28',
              username: 'cap'
            }
          ]
        }
      })
    });
    const result = await orgsList();

    expect(exec).toHaveBeenCalledTimes(1);
    expect(exec.mock.calls[0][0]).toBe('sfdx force:org:list --json');
    expect(result).toBe('cap');
  });

  it('should abort if no orgs available', async () => {
    exec.mockResolvedValue({
      stdout: JSON.stringify({
        result: {
          scratchOrgs: []
        }
      })
    });

    orgsList();

    expect(exec).toHaveBeenCalledTimes(1);
    expect(exec.mock.calls[0][0]).toBe('sfdx force:org:list --json');
    expect(inquirer.prompt).not.toHaveBeenCalled();
  });
});
