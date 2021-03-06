const path = require("path");
const autoprefixer = require("autoprefixer");
const ExtractCSS = require("extract-text-webpack-plugin");

const MODE = process.env.WEBPACK_ENV;
const ENTRY_FILE = path.resolve(__dirname, "src", "assets", "js", "main.js");
const OUTPUT_DIR = path.join(__dirname, "src", "static");

const config = {
    entry: ["@babel/polyfill", ENTRY_FILE],
    mode: MODE,
    module: {
        rules: [
            {
                test: /\.(js)$/,
                use: [
                    {
                        loader: "babel-loader",
                    },
                ],
            },
            {
                test: /\.(sass)$/,
                use: ExtractCSS.extract([
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins() {
                                return [
                                    autoprefixer({
                                        overrideBrowserslist: "cover 99.5%",
                                    }),
                                ];
                            },
                        },
                    },
                    {
                        loader: "sass-loader",
                    },
                ]),
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: `../assets/fonts/[name].[ext]`,
                        outputPath: "fonts/",
                    },
                },
            },
            {
                test: /\.(png|svg|jpg|gif|ico)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: `../assets/images/[name].[ext]`,
                        outputPath: "images/",
                    },
                },
            },
        ],
    },
    output: {
        path: OUTPUT_DIR,
        filename: "[name].js",
    },
    plugins: [new ExtractCSS("styles.css")],
};

module.exports = config;
