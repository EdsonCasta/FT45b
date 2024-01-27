module.exports = {
    mode: 'development',
    entry:'./browser/app.js',
    output: {
        path: __dirname + '/browser',
        filename: "bundle.js"
    }
}