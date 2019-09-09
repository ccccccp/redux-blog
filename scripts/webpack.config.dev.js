const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
process.env.NODE_ENV = 'development'
const config = {
    context: path.resolve(__dirname, '../'),
    devtool: 'eval-source-map',
    entry: {
        index: ['babel-polyfill',path.resolve(__dirname, '../src/app.js')],
        vendor: ["react"
            , "react-dom"
        ]
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/[name].[hash:7].js',
        // chunkFilename: 'js/[name].[hash:7].js',// 设置按需加载后的chunk名字
        publicPath: '/'
    },
    devServer: {
        //contentBase: path.resolve(__dirname, '../src'),
        hotOnly:true,
        port: 8084,
        host: '0.0.0.0',
        historyApiFallback: {
            disableDotRule: true
        },
        overlay: true,
        inline: true,
        proxy:[{
          context:['/api2','/api'],
          target: 'http://127.0.0.1:801/',
          changeOrigin: true,
          "pathRewrite": {
            "/api2": '',
            "/api": '/api',
          }
        }]
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            use: {
                loader: "babel-loader"
            }
        },
        {
            test: /\.(css)|(less)$/,
            use: [
                {
                    loader:"style-loader"
                },
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1,
                        sourceMap: true,
                        modules: true,
                        localIdentName: '[local].[hash:8]'
                    }

                },
                {
                    loader: 'less-loader',
                    options: {
                        noIeCompat: true,
                        javascriptEnabled: true
                    }
                }
            ]
        }, {
            test: /\.(jpe?g|gif|png|svg)$/,
            use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash:7].[ext]',
                        outputPath: 'assets/images'
                    }
                }]
        },{
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash:7].[ext]',
                        outputPath: 'assets/fonts'
                    }
            }]
        }]
    },
    plugins: [
        // new MiniCssExtractPlugin({
        //     filename: 'css/[name].[hash:8].css',
        //     chunkFilename: 'css/[name].[chunkhash:8].chunk.css'
        // }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, '../src/index.html')
        }),
        // new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    optimization: {
      namedModules: true, //取代插件中的 new webpack.NamedModulesPlugin()
      namedChunks: true,
        // splitChunks: {
        //     cacheGroups: {
        //         vendor: {
        //             chunks: "initial",
        //             test: "vendor",
        //             name: "vendor", // 使用 vendor 入口作为公共部分
        //             enforce: true,
        //         },
        //     }
        // }
    },
    resolve: {
        extensions: [".js", ".jsx", ".less", ".css"],
        alias: {
            "@": path.resolve(__dirname, '../src/')
        }
    }
};
module.exports = config;