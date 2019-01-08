const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
    devtool:'eval-source-map',
    entry: {
        index: ['babel-polyfill',path.resolve(__dirname, 'src/app.js')],
        vendor: ["react"
            , "react-dom"
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].[hash:7].js',
        chunkFilename:'js/[name].[hash:7].js',// 设置按需加载后的chunk名字
        publicPath: '/'
    },
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        hot: true,
        port:8084,
        host: '0.0.0.0',
        historyApiFallback: {
            disableDotRule: true
        },
        overlay: true,
        inline: true,
        stats: "errors-only"
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
                'style-loader',
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
            test: /\.(jpe?g|gif|png)$/,
            use: [
                // {
                //     loader: 'url-loader',
                //     options: {
                //         limit: 8192,
                //         fallback: "file-loader"
                //     }
                // }, 
                {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash:7].[ext]',
                        outputPath: 'assets/images'
                    }
                }]
        }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
            minify: process.env.NODE_ENV == 'production' ? { // 压缩 HTML 的配置
                minifyCSS: true, // 压缩 HTML 中出现的 CSS 代码
                minifyJS: true, // 压缩 HTML 中出现的 JS 代码
                removeComments: true,   // 移除注释
                collapseWhitespace: true,   // 缩去空格
                removeAttributeQuotes: true // 移除属性引号
            } : {}
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    optimization: {
        // webpack4.* chunks分离
        splitChunks: {
            // chunks: "all", // 所有的 chunks 代码公共的部分分离出来成为一个单独的文件
            cacheGroups: {
                vendor: {
                    chunks: "initial",
                    test: "vendor",
                    name: "vendor", // 使用 vendor 入口作为公共部分
                    enforce: true,
                },
            }
        }
    },
    resolve: {
        extensions: [".js", ".jsx", ".less", ".css"],
        alias: {
            "@": path.resolve(__dirname, './src/')
        }
    }
};
module.exports = config;