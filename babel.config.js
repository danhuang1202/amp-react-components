const constant = require('./config/constant')
const ENV_TEST = 'test'
const presets = [
  '@babel/preset-env',
  '@babel/preset-react',
  '@babel/preset-typescript'
]
const plugins = []

module.exports = function(api) {
  if (api.env() === ENV_TEST) {
    plugins.push([
      'css-modules-transform',
      {
        generateScopedName: constant.CSS_MODULE_LOCAL_IDENT_NAME,
        extensions: ['.css']
      }
    ])
  }

  return {
    presets,
    plugins
  }
}
