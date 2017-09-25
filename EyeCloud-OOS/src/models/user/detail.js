import pathToRegexp from 'path-to-regexp'
import { query,queryDevices,removeDevice,queryStores,createDevice,updateDevice } from '../../services/user'

export default {

  namespace: 'userDetail',

  state: {
    userInfo: {},
    devicesData:{},
    modalVisible: false,
    modalType: 'create',
    storeList: [],
  },

  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen(({ pathname }) => {
        console.log("跳转了");
        const match = pathToRegexp('/user/:id').exec(pathname)
        if (match) {
          dispatch({ type: 'queryInfo', payload: { id: match[1] } })
          dispatch({ type: 'queryDevices', payload: {searchName:"",areaIds:"",page: 1,pageSize: 10000000}})
        }
      })
    },
  },

  effects: {
    * queryInfo ({
      payload,
    }, { call, put }) {
      const data = yield call(query, payload)
      const { success, message, status, ...other } = data
      if (success) {
        console.log("详细信息--",other);
        yield put({
          type: 'querySuccess',
          payload: {
            userInfo: other,
          },
        })
      } else {
        throw data
      }
    },
    * queryDevices ({
      payload,
    }, { call, put }) {
      const storeList = yield call(queryStores,{userId:JSON.parse(localStorage.getItem("userInfo")).id,page: 1,pageSize: 10000000});
      console.log("执行了设备列表",payload);
      const data = yield call(queryDevices, payload)
      const { success, message, status, ...other } = data
      if (success) {
        yield put({
          type: 'querySuccess',
          payload: {
            devicesData: other,
            storeList: storeList.data
          },
        })
      } else {
        throw data
      }
    },

    * removeDevice ({
      payload,
    }, { call, put }) {
      console.log("执行了删除设备",payload);
      const data = yield call(removeDevice, payload)
      const { success, message, status, ...other } = data
      if (success) {
        yield put({
          type: 'queryDevices',
          payload: { searchName:"",areaIds:"",page: 1,pageSize: 10000000 },
        })
      } else {
        throw data
      }
    },

    * create ({ payload }, { call, put }) {
      console.log("执行了创建设备");
      const data = yield call(createDevice, payload)
      if (data.success) {
        yield put({ type: 'hideModal' })
        yield put({ 
          type: 'queryDevices',
          payload: { searchName:"",areaIds:"",page: 1,pageSize: 10000000 },
        })
      } else {
        throw data
      }
    },

    * update ({ payload }, { select, call, put }) {
      const id = yield select(({ user }) => user.currentItem.id)
      const newUser = { ...payload, id }
      const data = yield call(updateDevice, newUser)
      if (data.success) {
        yield put({ type: 'hideModal'})
        yield put({ 
          type: 'queryDevices',
          payload: { searchName:"",areaIds:"",page: 1,pageSize: 10000000 },
        })
      } else {
        throw data
      }
    },
  },

  reducers: {
    querySuccess (state, { payload }) {
      console.log("状态--",state,payload);
      return {
        ...state,
        ...payload,
      }
    },
    showModal (state, { payload }) {
      return { ...state, ...payload, modalVisible: true }
    },

    hideModal (state) {
      return { ...state, modalVisible: false }
    },
  },
}
