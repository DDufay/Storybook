const path = require('path');
const webpack = require('webpack');

// Export a function. Accept the base config as the only param.
module.exports = async ({config, mode}) => {
    // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    config.module.rules = config.module.rules.filter(rule => !rule.test.test(".scss"));

    // Make whatever fine-grained changes you need
    config.module.rules.push({
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, '../'),
    });


    config.module.rules.push({
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
            presets: ['es2015', 'react']
        }
    });


    config.resolve = {
        extensions: ['*', '.js', '.jsx']
    };

    config.plugins = [
        new webpack.HotModuleReplacementPlugin()
    ];


    // Return the altered config
    return config;
};
