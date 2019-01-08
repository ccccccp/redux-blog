const devServer = require("webpack-dev-server");
process.env.NODE_ENV = 'development';
const webpack = require("webpack")
const config = require("../webpack.config");
const compiler = webpack(config);
const path = require("path")
const server = new devServer(compiler, {
    contentBase: path.resolve(__dirname, "../src"),
    hot: true,
    host: '0.0.0.0',
    historyApiFallback: {
        disableDotRule: true
    },
    overlay: true,
    inline: true,
    stats: "errors-only"
});
server.listen(8084, "localhost", function () { });

