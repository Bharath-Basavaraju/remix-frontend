const path = require('path');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

module.exports = {
  entry: './src/index.tsx',
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
        produceScale: 'produceScale@http://localhost:3001/remoteEntry.js',
        colleagueMenu: 'colleagueMenu@http://localhost:3002/remoteEntry.js',
        notification: 'notification@http://localhost:3003/remoteEntry.js'
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
