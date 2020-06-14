const path = require("path");
const autoprefixer = require("autoprefixer");
const ExtractCSS = require("extract-text-webpack-plugin");

const MODE = process.env.WEBPACK_ENV;
const ENTRY_FILE = path.resolve(__dirname, "src", "assets", "js", "main.js");
const OUTPUT_DIR = path.join(__dirname, "src", "static");

const config = {
    entry: ENTRY_FILE,
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
        ],
    },
    output: {
        path: OUTPUT_DIR,
        filename: "[name].js",
    },
    plugins: [new ExtractCSS("styles.css")],
};

module.exports = config;
