module.exports = [
    {
        context: `${__dirname}/src`,
        entry: './App.js',
        module: {
            loaders: [
                { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
                { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
            ]
        },
        output: {
            filename: 'bundle.js',
            path: __dirname + '/public'
        }
    },
    {
        entry: './src/server.js',
        module: {
            loaders: [
                { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
                { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }

            ]
        },
        target: 'node',
        output: {
            filename: 'server.js',
            path: __dirname + '/public'
        }
    }
]