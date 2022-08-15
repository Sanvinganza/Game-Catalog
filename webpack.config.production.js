const {
  entryConfig,
  moduleProdConfig,
  resolve,
  output,
  optimizationProd,
  pluginsProdConfig
} = require("./webpack.env.config");

module.exports = (options) => {
  return {
    mode: options.mode,
    entry: entryConfig,
    module: moduleProdConfig,
    resolve: resolve,
    output: output,
    optimization: optimizationProd,
    plugins: pluginsProdConfig,
  };
};
