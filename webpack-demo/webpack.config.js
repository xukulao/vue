//const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports={
    entry:'./main.js',//入口文件  webpack 一个加载各种模块和打包的工具
    output:{ //配置打包输出的文件
        path:__dirname,
        filename:'build.js'
    },
    plugins: [
        // make sure to include the plugin for the magic
        //new VueLoaderPlugin()
    ],
    //模块加载规则  配置模块加载器
    module:{
        rules:[
            {
                test:/\.vue$/,//.vue 文件以vue-loader 处理
                loader:'vue-loader'
            },
            {
                test:/\.js$/,//所有.js文件以babel-loader 处理 并且排队node_modules目录
                loader:'babel-loader',
                exclude:/node_modules/
            }
        ]
    }
}