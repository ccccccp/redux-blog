const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

console.log(process.env.NODE_ENV)
const config = {
    devtool:false,
    mode:'production',
    context:path.resolve(__dirname,'../'),
    entry: {
        index: ['babel-polyfill',path.resolve(__dirname, '../src/app.js')],
        vendor: ["react"
            , "react-dom"
        ]
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/[name].[hash:7].js',
        chunkFilename:'js/[name].[hash:7].js',// 设置按需加载后的chunk名字
        publicPath: '/'
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
            test: /\.(jpe?g|gif|png|svg)$/,
            use: [
                {
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
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname,'../src/index.html'),
            title:'index-html',
            minify: { // 压缩 HTML 的配置
                minifyCSS: true, // 压缩 HTML 中出现的 CSS 代码
                minifyJS: true, // 压缩 HTML 中出现的 JS 代码
                removeComments: true,   // 移除注释
                collapseWhitespace: true,   // 缩去空格
                removeAttributeQuotes: true // 移除属性引号
            }
        }),
        new CleanWebpackPlugin(['dist'], {
            root: path.resolve(__dirname,'../')
        })
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
            "@": path.resolve(__dirname, '../src/')
        }
    }
};
module.exports = config;