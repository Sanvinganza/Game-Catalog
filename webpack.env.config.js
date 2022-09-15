const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require('dotenv-webpack');
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const entryConfig = ["react-hot-loader/patch", "./src/index.tsx"];

const devServer = {
  static: {
    directory: path.join(__dirname, "./dist"),
  },
  hot: true,
  port: 8080,
  proxy: {
    "/v4/**": {
      target: "https://api.igdb.com",
      secure: false,
      changeOrigin: true,
    },
  },
};

const moduleDevConfig = {
  rules: [
    {
      test: /\.tsx?$/,
      use: "ts-loader",
      exclude: /node_modules/,
    },
    {
      test: /\.scss$/,
      use: [
        "style-loader",
        "css-loader",
        {
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              plugins: [["postcss-preset-env"]],
            },
          },
        },
        "sass-loader",
      ],
    },
    {
      test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
      type: "javascript/auto",
      loader: "file-loader",
      options: {
        publicPath: "../",
        name: "[path][name].[ext]",
        context: path.resolve(__dirname, "src"),
        emitFile: false,
      },
    },
  ],
};

const moduleProdConfig = {
  rules: [
    {
      test: /\.tsx?$/,
      use: "ts-loader",
      exclude: /node_modules/,
    },
    {
      test: /\.scss$/,
      use: [
        "style-loader",
        "css-loader",
        {
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              plugins: [["postcss-preset-env"]],
            },
          },
        },
        "sass-loader",
      ],
    },
    {
      test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
      type: "javascript/auto",
      loader: "file-loader",
      options: {
        name: "[path][name].[ext]",
        context: path.resolve(__dirname, "src"),
        emitFile: false,
      },
    },
  ],
};

const resolve = {
  extensions: [".tsx", ".ts", ".js"],
  alias: {
    "react-dom": "@hot-loader/react-dom",
  },
};

const output = {
  filename: "js/[name].bundle.js",
  path: path.resolve(__dirname, "./dist"),
};

const pluginsDevConfig = [
  new Dotenv({
    path: './.env'
  }),
  new HtmlWebpackPlugin({
    title: "MyGameStore",
    template: "./src/index.html",
    inject: true,
    minify: false,
  }),
  new BundleAnalyzerPlugin({
    analyzerMode: "static",
    openAnalyzer: false,
  }),
  new CopyPlugin({
    patterns: [{ from: "./src/images", to: "images" }],
  }),
  new ESLintPlugin({
    fix: true,
    extensions: "tsx",
    context: "./src/**/*.tsx",
  }),
  new CleanWebpackPlugin(),
];

const pluginsProdConfig = [
  new CleanWebpackPlugin(),
  new CopyPlugin({
    patterns: [{ from: "./src/images", to: "images" }],
  }),
  new MiniCssExtractPlugin({
    filename: "css/app.min.css",
  }),
  new HtmlWebpackPlugin({
    template: "./src/index.html",
    inject: true,
    minify: false,
    title: "MyGameStore",
  }),
];

const optimizationDev = {
  runtimeChunk: "single",
  splitChunks: {
    cacheGroups: {
      vendor: {
        test: /[\\/]node_modules[\\/]/,
        name: "vendors",
        chunks: "all",
      },
    },
  },
};

const optimizationProd = {
  minimizer: [
    new TerserPlugin({
      extractComments: false,
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
    }),
  ],
  splitChunks: {
    chunks: "all",
  },
};

//Common
module.exports.entryConfig = entryConfig;
module.exports.resolve = resolve;
module.exports.output = output;

//Dev
module.exports.devServer = devServer;
module.exports.pluginsDevConfig = pluginsDevConfig;
module.exports.optimizationDev = optimizationDev;
module.exports.moduleDevConfig = moduleDevConfig;

//Prod
module.exports.moduleProdConfig = moduleProdConfig;
module.exports.optimizationProd = optimizationProd;
module.exports.pluginsProdConfig = pluginsProdConfig;
