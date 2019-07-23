module.exports = {
  moduleDirectories: [
    'node_modules',
    '<rootDir>/src',
    '<rootDir>/test',
    'src',
    'test'
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__test__/__mocks__/assetsTransformer.js',
    '\\.(s?css)$': 'identity-obj-proxy'
  },
  setupFiles: ['raf/polyfill'],
  globals: {
    'ts-jest': {
      useBabelrc: true
    }
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest'
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json']
}
