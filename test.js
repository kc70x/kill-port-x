/* global test, expect, describe */
const kill = require('./');

describe('kill-port', () => {
  test('should be defined', () => {
    expect(kill).toBeDefined();
  });

  test('should throw if no port is provided', () => {
    expect(kill()).rejects.toThrow();
  });

  test('should throw if no process running on given port', () => {
    expect(kill(9999)).rejects.toThrow();
  });
});
