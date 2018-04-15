const path = require('path');

module.exports ={
    entry: './src/app.js',
    output: {
        path: path.resolve(_dirname, 'build'),
        filename: 'app.bundle.js'
    }
};