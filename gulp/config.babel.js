import path from 'path';
import webpack from 'webpack';

const root = exports.root = path.resolve(__dirname, '..');

const src       = exports.src            = path.join(root, 'src');
const srcServer = exports.srcServer      = path.join(src, 'server');
const srcClient = exports.srcClient      = path.join(src, 'client');

const dist           = exports.dist           = path.join(root, 'dist');
const distServer     = exports.distServer     = path.join(dist, 'server');
const distClient     = exports.distClient     = path.join(dist, 'client');
const distTempClient = exports.distTempClient = path.join(dist, '.webpack_temp');

exports.webpackWatch   = false;
const webpackEntry   = exports.webpackEntry   = path.join(distTempClient, 'main.js');
const webpackOption  = exports.webpackOption  = {
    watch: exports.webpackWatch,
    output: {
        filename: 'bundle.js'
    },
    plugins: [
      new webpack.optimize.DedupePlugin(),
    ],
    module:{
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
};
