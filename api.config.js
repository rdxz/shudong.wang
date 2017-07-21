const isProdMode = Object.is(process.env.NODE_ENV, 'production')

module.exports = {
  // baseUrl: isProdMode ? 'https://api.surmon.me/' : 'https://api.surmon.me/'
  baseUrl: isProdMode ? 'http://blog.shudong.wang/' : 'http://blog.shudong.wang/'
}
