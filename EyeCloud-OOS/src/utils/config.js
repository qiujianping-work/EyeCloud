const APIIntellif = '/api/intellif'
const APIV2 = '/api/v2'

module.exports = {
  name: '慧眼云OOS管理系统',
  prefix: '慧眼云OOS管理系统',
  footerText: '慧眼云OOS管理系统  © 2017 intellif',
  logo: '/icon_logo.png',
  iconFontCSS: '/iconfont.css',
  iconFontJS: '/iconfont.js',
  CORS: [],
  openPages: ['/login'],
  apiPrefix: '/api/intellif',
  APIIntellif,
  APIV2,
  api: {
    userLogin: `${APIIntellif}/user/login`,
    userLogout: `${APIIntellif}/user/logout`,
    userInfo: `${APIIntellif}/userInfo`,
    users: `${APIIntellif}/users`,
    posts: `${APIIntellif}/posts`,
    user: `${APIIntellif}/user/:id`,
    dashboard: `${APIIntellif}/dashboard`,
    menus: `${APIIntellif}/menus`,
    weather: `${APIIntellif}/weather`,
    v1test: `${APIIntellif}/test`,
    v2test: `${APIV2}/test`,
  },
}
