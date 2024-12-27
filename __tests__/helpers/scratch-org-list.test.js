const inquirer = require('inquirer');
const { exec } = require('node:child_process');
const { listOrgs } = require('../../src/helpers/scratch-org-list');

jest.mock('child_process');
jest.mock('util');
jest.mock('../../src/helpers/logger');

describe('Orgs list', () => {
  beforeEach(() => {
    inquirer.prompt.mockClear();
    inquirer.prompt.mockResolvedValue({ choice: '1891-09-28 my-alias http://test-scratch.com *' });
    exec.mockClear();
  });

  it('should get the list of orgs from SF and return the selection', async () => {
    exec.mockResolvedValue({
      stdout: JSON.stringify({
        result: {
          nonScratchOrgs: [],
          scratchOrgs: [
            {
              alias: 'my-alias',
              instanceUrl: 'http://test-scratch.com',
              isDefaultUsername: 'yes',
              expirationDate: '1891-09-28',
              username: 'cap'
            }
          ]
        }
      })
    });
    const result = await listOrgs();

    expect(exec).toHaveBeenCalledTimes(1);
    expect(exec.mock.calls[0][0]).toBe('sf org list --json');
    expect(result).toMatchObject({ username: 'cap' });
  });

  it('should abort if no orgs available', async () => {
    exec.mockResolvedValue({
      stdout: JSON.stringify({
        result: {
          nonScratchOrgs: [],
          scratchOrgs: []
        }
      })
    });

    await listOrgs();

    expect(exec).toHaveBeenCalledTimes(1);
    expect(exec.mock.calls[0][0]).toBe('sf org list --json');
    expect(inquirer.prompt).not.toHaveBeenCalled();
  });
});
