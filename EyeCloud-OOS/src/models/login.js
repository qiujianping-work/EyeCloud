import { routerRedux } from 'dva/router'
import { login } from 'services/login'

export default {
  namespace: 'login',

  state: {},

  effects: {
    * login ({
      payload,
    }, { put, call, select }) {
      const data = yield call(login, payload)
      const { locationQuery } = yield select(_ => _.app)
      console.info("token--",data);
      if (data.success) {
        window.localStorage.setItem('token',data.access_token);
        window.localStorage.setItem('userInfo',JSON.stringify(data.oauth_AIK_user_info));
        const { from } = locationQuery
        yield put({ type: 'app/query' })
        if (from && from !== '/login') {
          yield put(routerRedux.push(from))
        } else {
          yield put(routerRedux.push('/user'))
        }
      } else {
        throw data
      }
    },
  },

}
