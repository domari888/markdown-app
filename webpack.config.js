const path = require('path');

module.exports = {
  // 読み込むファイルを指定
  entry: './src/index.ts',

  module: {
    // build 時に行う追加処理
    rules: [
      // .ts ファイルに対して ts-loader を実行する
      // exclude: build 対象外とするファイル
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },

  // モジュールとして解決するファイルの拡張子を指定
  resolve: {
    extensions: ['.ts'],
  },

  // 出力するファイルを指定
  // dist ディレクトリに対して、ファイル名 index.js で出力
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: 'dist/',
  },
};
