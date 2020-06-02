module.exports = function parseCookieString (cookieString) {
  return cookieString.split(/;\s+/).reduce(
    (acc, cookie) => {
      const index = cookie.indexOf('=')
      acc[cookie.substring(0, index)] = cookie.substring(index + 1)
      return acc
    },
    {}
  )
}
