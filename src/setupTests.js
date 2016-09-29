const consoleMock = {
  log: console.log,
  warn: jest.fn(),
  error: jest.fn()
};

global.console = consoleMock;