module.exports = function parseCookieString (cookieString) {
  if (typeof cookieString !== 'string') return
  return cookieString.split(/;\s+/).reduce(
    (acc, cookie) => {
      const index = cookie.indexOf('=')
      acc[cookie.substring(0, index)] = cookie.substring(index + 1)
      return acc
    },
    {}
  )
}
