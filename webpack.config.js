const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')

module.exports = (env = {}) => ({
  mode: env.prod ? 'production' : 'development',
  entry: path.resolve(__dirname, './src/main.ts'),
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.png$/,
        use: {
          loader: 'url-loader',
          options: { limit: 8192 },
        },
      },
      {
        test: /\.css$/,
        use: 'css-loader',
      },
    ],
  },
  resolve: {
    alias: {
      'vue': '@vue/runtime-dom',
    },
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  devServer: {
    inline: true,
    hot: true,
    stats: 'minimal',
    overlay: true,
    contentBase: __dirname,
  },
});
