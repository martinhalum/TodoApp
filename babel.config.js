module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@atoms': './src/components/atoms',
          '@layouts': './src/components/layouts',
          '@molecules': './src/components/molecules',
          '@organisms': './src/components/organisms',
          '@contexts': './src/contexts',
          '@providers': './src/providers',
          '@navigation': './src/navigation',
          '@pages': './src/pages',
          '@storage': './src/storage',
          '@theme': './src/theme',
        },
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.json',
          '.ts',
          '.tsx',
          '.svg',
          '.png',
        ],
      },
    ],
    'transform-inline-environment-variables',
  ],
  retainLines: true,
};
