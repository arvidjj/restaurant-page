const path = require('path');

// HTML
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");

//JS
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    output: {
        filename: '[name][contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.html$/i, //CARGA HTML
                use: 'html-loader'
            },
            {
                test: /\.(png|jpg)$/i, //PARA IMAGENES
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name]-[hash][ext]'
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'Best Restaurant',
        template: './src/index-template.html',
        filename: 'index.html'
    }),],
    optimization: {
        minimize: true,
        minimizer: [
            new HtmlMinimizerPlugin(),
            new TerserPlugin(),
        ],
    },
};