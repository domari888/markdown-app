const path = require('path');

module.exports = {
  // 読み込むファイルを指定
  entry: './src/index.tsx',

  module: {
    // build 時に行う追加処理
    rules: [
      // .ts または .tsx ファイルに対して ts-loader(TypeScript の変換) を実行する
      // exclude: build 対象外とするファイル
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },

  // モジュールとして解決するファイルの拡張子を指定
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },

  // 出力するファイルを指定
  // dist ディレクトリに対して、ファイル名 index.js で出力
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: 'dist/',
  },

  // webpack-dev-server の設定
  // publicPath: ビルドしたファイルへのパス
  // hot: ファイルを変更時にブラウザに反映
  // open: 起動時にブラウザで開く
  devServer: {
    publicPath: '/dist/',
    hot: true,
    open: true,
  },
};
