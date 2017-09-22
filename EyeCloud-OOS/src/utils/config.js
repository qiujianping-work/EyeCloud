const APIIntellif = '/api/intellif'
const APIV2 = '/api'

module.exports = {
  name: '慧眼云OOS管理系统',
  prefix: '慧眼云OOS管理系统',
  footerText: '慧眼云OOS管理系统  © 2017 intellif',
  logo: '/icon_logo.png',
  iconFontCSS: '/iconfont.css',
  iconFontJS: '/iconfont.js',
  CORS: [],
  openPages: ['/login'],
  baseURL: 'http://192.168.2.15:8082',
  apiPrefix: '/api/intellif',
  APIIntellif,
  APIV2,
  api: {
    userLogin: `${APIV2}/oauth/token`,
    userLogout: `${APIIntellif}/server/logoff`,
    userInfo: `${APIIntellif}/userInfo`,
    user: `${APIIntellif}/user/:id`,
    users: `${APIIntellif}/user/query`,
    posts: `${APIIntellif}/posts`,
    dashboard: `${APIIntellif}/dashboard`,
    menus: `${APIIntellif}/menus`,
  },
}
