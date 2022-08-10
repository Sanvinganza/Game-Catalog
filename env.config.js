const path = require('path');

const outputConfig = {
    destPath: "./dist"
};

const entryConfig = [
    'react-hot-loader/patch',
    "./src/index.tsx"
];

const copyPluginPatterns = {
    patterns: [
        { from: "./src/assets/images", to: "images" },
    ]
};

const devServer = {
    static: {
        directory: path.join(__dirname, outputConfig.destPath),
    },
    hot: true,
    port: 8080,
    proxy: {
        '/v4/**': {
        target: 'https://api.igdb.com',
        secure: false,
        changeOrigin: true
        }
    }
};

const scssConfig = {
    destFileName: "css/app.min.css"
};

const terserPluginConfig = {
    extractComments: false,
    terserOptions: {
        compress: {
            drop_console: true,
        },
    }
};

module.exports.copyPluginPatterns = copyPluginPatterns;
module.exports.entryConfig = entryConfig;
module.exports.scssConfig = scssConfig;
module.exports.devServer = devServer;
module.exports.terserPluginConfig = terserPluginConfig;
module.exports.outputConfig = outputConfig;