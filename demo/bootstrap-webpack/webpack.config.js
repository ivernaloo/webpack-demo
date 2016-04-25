module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: "style!css"},
            {test: /\.(woff|woff2)$/, loader: "url-loader?limit=10000&mimetype=application/font-woff"},
            {test: /\.ttf$/, loader: "file-loader"},
            {test: /\.eot$/, loader: "file-loader"},
            {test: /\.svg$/, loader: "file-loader"},
            { test: /\.less$/, loader: 'less' }
            // ,
            // {test: /\.js?$/, exclude: /(node_modules|bower_components)/,
            // loader: 'babel',
            // query: {
            //         presets: ['react', 'es2015']
            // }}
        ]
    }
};