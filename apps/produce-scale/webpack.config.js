const path = require('path');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

module.exports = {
  entry: './src/App.tsx',
  mode: 'development',
  devServer: { port: 3001 },
  resolve: { extensions: ['.tsx', '.ts', '.js'] },
  module: {
    rules: [{ test: /\.tsx?$/, loader: 'ts-loader', exclude: /node_modules/ }]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'produceScale',
      filename: 'remoteEntry.js',
      exposes: { './App': './src/App' },
      shared: ['react', 'react-dom', 'zustand']
    })
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'auto'
  }
};
