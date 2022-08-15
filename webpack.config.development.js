const {
  entryConfig,
  devServer,
  moduleDevConfig,
  resolve,
  output,
  pluginsDevConfig,
  optimizationDev
} = require("./webpack.env.config");

module.exports = (options) => {
  return {
    mode: options.mode,
    entry: entryConfig,
    devServer,
    target: "web",
    module: moduleDevConfig,
    resolve: resolve,
    output: output,
    plugins: pluginsDevConfig,
    optimization: optimizationDev
  };
};
