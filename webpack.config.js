import path from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const mode = process.env.NODE_ENV || "development";
const isDev = process.env.NODE_ENV === "development";
const target = isDev ? "web" : "browserslist";
const devtool = isDev ? "source-map" : undefined;

let htmlPageNames = ['stones'];
let multipleHtmlPlugins = htmlPageNames.map(name => {
  return new HtmlWebpackPlugin({
    template: `./src/${name}.html`,
    filename: `${name}.html`,
    chunks: [`${name}`],
  })
});

export default {
  mode,
  target,
  devtool,
  entry: {
    main: path.resolve(__dirname, "src", "index.js"),
    stones: path.resolve(__dirname, "src", "stones.js")
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    clean: true,
    filename: "[name].[contenthash].js"
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: "html-loader",
      },
      {
        test: /\.css$/i,
        use: [
          isDev ? "style-loader" : MiniCssExtractPlugin.loader, 
          "css-loader"
        ],
      }
    ]
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
        filename: isDev ? "[name].css" : "[name].[contenthash].css", 
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
      chunks: ["main"],
    }),
  ].concat(multipleHtmlPlugins)
};