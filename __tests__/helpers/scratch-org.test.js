const exec = require('child_process').exec;
const { deleteOrg, getInfo, openOrg, showInfo } = require('../../src/helpers/scratch-org');
const logger = require('../../src/helpers/logger');

jest.mock('child_process');
jest.mock('util');
jest.mock('../../src/helpers/logger');

describe('ScratchOrg', () => {
  beforeEach(() => {
    exec.mockClear();
  });

  describe('Info', () => {
    beforeEach(() => {
      logger.info.mockClear();

      exec.mockResolvedValue({
        stdout: JSON.stringify({
          result: {
            username: 'test',
            password: '123',
            instanceUrl: 'http://instance.com',
            expirationDate: '1891-09-28'
          }
        })
      });
    });

    it('should retrieve info from SF', async () => {
      showInfo();

      expect(exec).toHaveBeenCalledTimes(1);
      expect(exec.mock.calls[0][0]).toBe('sfdx force:org:display --json');
    });

    it('should pass the alias/username to the command', async () => {
      showInfo(false, 'myAlias');

      expect(exec).toHaveBeenCalledTimes(1);
      expect(exec.mock.calls[0][0]).toBe('sfdx force:org:display -u myAlias --json');
    });


    it('should print raw info', async () => {
      await showInfo();

      expect(logger.info).toHaveBeenCalledTimes(5);
      expect(logger.info.mock.calls[0][1]).toBe('');
      expect(logger.info.mock.calls[1][1]).toBe('test');
      expect(logger.info.mock.calls[2][1]).toBe('123');
      expect(logger.info.mock.calls[3][1]).toBe('http://instance.com');
      expect(logger.info.mock.calls[4][1]).toBe('1891-09-28');
    });

    it('should print info in markdown format', async () => {
      await showInfo(true);

      expect(logger.info).toHaveBeenCalledTimes(6);
      expect(logger.info.mock.calls[0][0]).toBe('|key          |value');
      expect(logger.info.mock.calls[2][1]).toBe('test');
      expect(logger.info.mock.calls[3][1]).toBe('123');
      expect(logger.info.mock.calls[4][1]).toBe('http://instance.com');
      expect(logger.info.mock.calls[5][1]).toBe('1891-09-28');
    });
  });

  describe('Open', () => {
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

  describe('Delete', () => {
    it('should pass the username to the command', async () => {
      deleteOrg('myscratchorg');

      expect(exec).toHaveBeenCalledTimes(1);
      expect(exec.mock.calls[0][0]).toBe('sfdx force:org:delete -u myscratchorg --noprompt');
    });

    it('should not pass a user if missing', async () => {
      deleteOrg();

      expect(exec).toHaveBeenCalledTimes(1);
      expect(exec.mock.calls[0][0]).toBe('sfdx force:org:delete --noprompt');
    });
  });

  describe('GetInfo', () => {
    it('should pass the username to the command', async () => {
      getInfo('myscratchorg');

      expect(exec).toHaveBeenCalledTimes(1);
      expect(exec.mock.calls[0][0]).toBe('sfdx force:org:display -u myscratchorg --json');
    });

    it('should parse the result', async () => {
      const user = {
        username: 'test',
        password: '123',
        instanceUrl: 'http://instance.com',
        expirationDate: '1891-09-28'
      };
      exec.mockResolvedValue({
        stdout: JSON.stringify({
          result: user
        })
      });

      const result = await getInfo('myscratchorg');
      expect(result).toMatchObject(user);
    });
  });
});
