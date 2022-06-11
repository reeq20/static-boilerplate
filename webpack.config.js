const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const AbsPath = Object.freeze({
    SOURCE: path.resolve(__dirname, './src'),
    DEST: path.resolve(__dirname, './public'),
});

module.exports = () => {
    return {
        mode: 'development',
        resolve: {
            alias: {},
            extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss'],
            modules: [
                path.resolve(__dirname, './node_modules'),
            ],
        },
        entry: {
            app: `${AbsPath.SOURCE}/js/app.js`,
        },
        output: {
            path: AbsPath.DEST,
            filename: `js/[name].js`
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    exclude: path.resolve(__dirname, './node_modules'),
                    use: 'ts-loader',
                },
            ]
        },
        plugins:[
            new HtmlWebpackPlugin({
                template: `${AbsPath.SOURCE}/html/index.tsx`,
                filename: 'index.html',
                minify: false,
                inject: false,
            })
        ]
    }
}