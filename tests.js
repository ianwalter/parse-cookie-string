const { test } = require('@ianwalter/bff')
const { oneLine, oneLineTrim } = require('common-tags')
const parseCookieString = require('.')

test('simple cookie string gets parsed', t => {
  const cookie = oneLine`
    __stripe_mid=fe67cc7a-cd15-4a30-aa21-260a6207ef55;
    __stripe_sid=cdb94de5-1762-4031-8e98-f8767f442969;
    ${oneLineTrim`
      connect.sid=s%3AY3DYl6RDpmSwt2lGn1FTYuSTLsmBEkk2.
      Sb8i0nDGVPLBGAC8AGCUk6Og8IJzzSFuBzTTYz4jFUY
    `}
  `
  t.expect(parseCookieString(cookie)).toMatchSnapshot()
})
