export default {
  testEnvironment: 'node',
  roots: ['<rootDir>/__tests__'],
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  moduleFileExtensions: ['js'],
  collectCoverage: true,
  collectCoverageFrom: ['src/classes/**/*.js'],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov']
};
