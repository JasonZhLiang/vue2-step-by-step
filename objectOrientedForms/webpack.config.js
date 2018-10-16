//we have done the code in file app.js, but all the code(error class, form class and vue) in one file, it's will be nice each of them stored in there own modules
//but browsers don't support modules, so we have to use module bundler, that's the brewsify and we
//using vue-cli
// npm install -g vue-cli
// vue init webpack-simple vue-project-name
// cd vue-project-name
// npm install // install dependencies
// npm run dev // ready to go
let webpack = require('webpack');//sounds like we need install webpack, go to cmd this folder and type: npm install webpack@2.2.0-rc.3 --save-dev (appoint version 2.2.0-rc.3)   or npm install --save-dev webpack
let path= require('path');//basically we will require an absolutely path, so we pull path in

//we have created webpack.config.js file, so now, we can run node_modules\.bin\webpack executable webpack file now, if no webpack.config.js file, we can run "webpack sourceFile outputFiles"
// be noted, in order to run executable file in different folder, You should use a backslash \, instead of forward slash. /, example as follows,
// C:\dirZero> dirOne\myProgram.exe
// Or, wrap it with double quotes "
// C:\dirZero> "dirOne/myProgram.exe"

//node_modules\.bin\webpack --hide-modules will hide show all the modules install status during installing.
//node_modules\.bin\webpack --hide-modules --watch add watch tag for watching for changes

// if you have package.json file you can add scripts with "webpack": "webpack --hide-modules --watch", then you can run: npm run webpack, noted: you don't need put  node_modules\.bin\ pre-fixed

module.exports ={

    // entry:'./appEntryPoint.js',
    //in case add or change anything in library without re-compile all the code, this usually very large, so consider one bundle for app code, another one for vendor libraries
    entry:{
        app:'./appEntryPoint.js',
        vendor:['vue','axios']
    },

    output:{
        path: path.resolve(__dirname,'./public'),//this will resolve to project root, then go to /public folder
        // filename:'bundle.js',
        filename:'[name].js',//since we need two bundle files, so we don't need hard code the file name, just like special sequence that webpack will tag and replace with proper name. now two bundle files are generated, app.js and vendor.js
        publicPath:'./public'
    },

    //the error in app.js from UglifyJs--SyntaxError: Unexpected token: name (Form). So we need babel-loader let browser understand ecmaz 2015 js
    //after npm install bable-loader --save -dev and npm install babel-core --save-dev, we still have error so we need babel configuration file, that is .babelrc come from, preset all plugin es2015 needded.
    // then we need npm install babel-preset-es2015 --save-dev
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude:/node_modules/,
                loader:'babel-loader'
            }
        ]
    },
//there are two builds available, the standalone build and runtime-only build in Vue, but by default, the NPM package exports the runtime-only build, so we need add the following alias to Webpack config.
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names:['vendor'] //this corresponds to entry: vendor:
        })
    ]
};

//for production we need to minify the out put code

if (process.env.NODE_ENV === 'production'){ // minification
    module.exports.plugins.push(//in windows cmd prompt typing: set NODE_ENV=production; then run the webpack, typing :node_modules\.bin\webpack, now the bundle.js will be compressed from 360kb to 131kb
        new webpack.optimize.UglifyJsPlugin({
            sourcemap:true,
            compress:{
                warnings:false
            }
        })
    );

    module.exports.plugins.push(//push another plugin
        new webpack.DefinePlugin({//track down any references to process.env, specific is NODE_ENV and make sure return is production
            'process.env':{
                NODE_ENV:'production'
            }
        })
    );
}

//if you do not want compress the bundle files, in windows cmd prompt typing: set NODE_ENV=development; then run the webpack, typing :node_modules\.bin\webpack, now the app.js and vendor.js will looks like normal.

