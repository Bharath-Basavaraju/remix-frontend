const path = require('path');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

module.exports = {
  entry: './app/entry.client.tsx',
  mode: 'development',
  devServer: { port: 3000 },
  resolve: { extensions: ['.tsx', '.ts', '.js'] },
  module: {
    rules: [{ test: /\.tsx?$/, loader: 'ts-loader', exclude: /node_modules/ }]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'shell',
      remotes: {
        produceScale: 'produceScale@/remotes/produce-scale/remoteEntry.js',
        colleagueMenu: 'colleagueMenu@/remotes/colleague-menu/remoteEntry.js',
        notification: 'notification@/remotes/notification/remoteEntry.js'
      },
      shared: ['react', 'react-dom', 'xstate', 'zustand']
    })
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'auto'
  }
};
