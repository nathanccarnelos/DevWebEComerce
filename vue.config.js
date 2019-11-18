module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/DevWebEComerce/' : '/',
  runtimeCompiler: process.env.NODE_ENV !== 'production',
  'transpileDependencies': [
    'vuetify'
  ]
}
