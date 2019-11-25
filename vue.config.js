module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/DevWebEComerce/' : '/',
  runtimeCompiler: process.env.NODE_ENV !== 'production',
  'transpileDependencies': [
    'vuetify'
  ],
  devServer: {
    proxy: {
      '^/api': {
        target: 'https://shielded-oasis-78348.herokuapp.com/public/',
        changeOrigin: true
      }
    }
  }
}
