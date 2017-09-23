/* global window */
import modelExtend from 'dva-model-extend'
import { config } from 'utils'
import { queryList } from 'services/storeServices'
import { queryMonitors } from 'services/monitorServices'

const { prefix } = config

export default {
  namespace: 'monitor',

  state: {
    storeList:[],
    monitorList:[],
  },

  subscriptions: {
    setup ({ dispatch, history }) {
      history.listen((location) => {
        if (location.pathname === '/monitor') {
          dispatch({
            type: 'query',
            payload: location.query,
          })
        }
      })
    },
  },

  effects: {

    * query ({ payload = {} }, { call, put }) {
      const data = yield call(queryList, {...payload,...{userId:JSON.parse(localStorage.getItem("userInfo")).id,page: 1,pageSize: 10000000}})
      /*const data = {
                    "data": [
                      {
                        "created": 1505785952000,
                        "updated": 1505785952000,
                        "geoString": "yun",
                        "id": "6",
                        "areaName": "yun",
                        "remark": "yun",
                        "previousId": "1",
                        "nodeType": "area",
                        "sort": 0
                      },
                      {
                        "created": 1505785999000,
                        "updated": 1505785999000,
                        "geoString": "yun1",
                        "id": "7",
                        "areaName": "yun1",
                        "remark": "yun1"
                      }
                    ],
                    "errCode": 0,
                    "maxPage": 1,
                    "total": 2
                  }*/
      if (data) {
        yield put({
          type: 'queryMonitor',
          payload: {
            storeList: data.data,
          },
        })
      }
    },

    * queryMonitor ({ payload = {} }, { call, put }) {
      console.log("布控接口返回---",payload)
      const { param } = payload;
      const data = yield call(queryMonitors, {...{"areaId":"","queryText":"","page":1,"pageSize":1000000000},...param,})
      /*const data = {"data":[
                        {"created":1506072742000,"updated":1506072742000,"crimeName":"反恐-反恐人员","areaName":"0","id":31,"realName":"0922测试11","birthday":1495523658000,"nation":"汉","realGender":2,"cid":"36012419930917181X","address":"柠檬3","photoData":"http://192.168.2.27/ifaas/api/uploads/2017-09-22-17-29-55-378_format_f.jpg","crimeType":8,"crimeAddress":null,"description":null,"ruleId":1,"identity":-1,"bankId":27,"starttime":1506072742000,"endtime":2452152742000,"status":1,"owner":"冼文辉","ownerStation":"科学馆核心区","important":0,"arrest":0,"similarSuspect":0,"inStation":0,"history":0,"type":0,"isUrgent":0},
                        {"created":1506072770000,"updated":1506072770000,"crimeName":"反恐-反恐人员","areaName":"0","id":32,"realName":"0922测试21","birthday":1495523658000,"nation":"汉","realGender":2,"cid":"36012419930917181X","address":"柠檬3","photoData":"http://192.168.2.27/ifaas/api/uploads/2017-09-22-17-29-55-378_format_f.jpg","crimeType":8,"crimeAddress":null,"description":null,"ruleId":1,"identity":-1,"bankId":27,"starttime":1506072770000,"endtime":2452152770000,"status":1,"owner":"冼文辉","ownerStation":"科学馆核心区","important":0,"arrest":0,"similarSuspect":0,"inStation":0,"history":0,"type":0,"isUrgent":0}
                      ],
                      "errCode":0,
                      "maxPage":1,
                      "total":2
                    }*/
      if (data) {
        yield put({
          type: 'querySuccess',
          payload: {
            ...payload,
            monitorList: data.data,
          },
        })
      }
    },

  },

  reducers: {

    showModal (state, { payload }) {
      return { ...state, ...payload, modalVisible: true }
    },
    querySuccess (state, { payload }) {
      const {  storeList,monitorList, } = payload
      return {
        ...state,
        storeList,
        monitorList,
      }
    },

  },
}
