module.exports = function(api) {
  // Annoyingly we can't detect jest by its caller.name, so we have to perform
  // a process of elimination on everything that isn't jest
  const isJest = api.caller((caller = {}) => {
    return !['babel-loader', 'rollup-plugin-babel'].includes(caller.name);
  });

  const runtimePreset = isJest
    ? ['babel-preset-shopify/node', {modules: 'commonjs'}]
    : ['babel-preset-shopify/web', {modules: false}];

  return {
    presets: [runtimePreset, ['babel-preset-shopify/react', {hot: isJest}]],
    plugins: ['./config/babel/plugins/sass-namespace-to-default-import.js'],
  };
};
