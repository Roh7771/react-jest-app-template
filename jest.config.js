module.exports = {
  rootDir: './src',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  testRegex: '.test.(jsx?)$',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/fileMock.js',
  },
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
};
