module.exports = {
  root: true,
  extends: '@react-native',
  overrides: [
    {
      files: [
        '.eslintrc.js',
        'react-native.config.js',
        'babel.config.js',
        'metro.config.js',
        'jest.config.js',
      ],
      env: {
        node: true,
      },
      parserOptions: {
        requireConfigFile: false,
      },
    },
  ],
};
