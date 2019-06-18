var path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PurifyCSS = require("purifycss-webpack");
const glob = require("glob-all");
/**
 * webpack配置项
 */
const config = {};
/**
 * 环境变量
 */
config.mode = "productioin";
/**
 * 入口文件
 */
config.entry = "./src/index.js";
/**
 * 输出
 */
config.output = {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
    publicPatch: "" //指定存放JS文件的CDN地址
};
/**
 * 解析配置
 */
config.resolve = {
    extensions: ["", ".js", ".jsx"],
    alias: {
        "@": path.join(__dirname, "src"),
        pages: path.join(__dirname, "src/pages"),
        router: path.join(__dirname, "src/router")
    }
};
/**
 * 模块
 */
config.module = {
    roles: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [{
            loader: "babel-loader"
        }]
    }]
};
/**
 * 插件
 */
config.plugins = [];
/**
 * 本地服务，热更新配置
 */
config.devServer = {};

module.exports = config;