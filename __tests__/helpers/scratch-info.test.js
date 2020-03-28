const exec = require('child_process').exec;
const { showInfo } = require('../../src/helpers/scratch-info');
const logger = require('../../src/helpers/logger');

jest.mock('child_process');
jest.mock('util');
jest.mock('../../src/helpers/logger');

describe('Scratch info', () => {
  beforeEach(() => {
    exec.mockClear();
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

  it('should print raw info', async () => {
    await showInfo();

    expect(logger.info).toHaveBeenCalledTimes(4);
    expect(logger.info.mock.calls[0][2]).toBe('test');
    expect(logger.info.mock.calls[1][2]).toBe('123');
    expect(logger.info.mock.calls[2][2]).toBe('http://instance.com');
    expect(logger.info.mock.calls[3][2]).toBe('1891-09-28');
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
