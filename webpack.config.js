const path = require('path');

module.exports = {
  // 読み込むファイルを指定
  entry: './src/index.js',

  // 出力するファイルを指定
  // dist ディレクトリに対して、ファイル名 index.js で出力
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: 'dist/',
  },
};
