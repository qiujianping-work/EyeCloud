const qs = require('qs')
const Mock = require('mockjs')
const config = require('../utils/config')

const { baseURL, apiPrefix } = config

let storeListData = Mock.mock({
  'data|80-100': [
    {
      id: '@id',
      name: '@name',
      count: '@id',
      servers: '@name',
      address: '@name',
      createTime: '@datetime',
      remarks: /[a-z][A-Z][0-9]{20}/,
    },
  ],
})


let database = storeListData.data


  [`POST ${baseURL}/${apiPrefix}/area/query`] (req, res) {
    const newData = req.body
    newData.createTime = Mock.mock('@now')
    // newData.avatar = newData.avatar || Mock.Random.image('100x100', Mock.Random.color(), '#757575', 'png', newData.nickName.substr(0, 1))
    newData.id = Mock.mock('@id')

    database.unshift(newData)

    res.status(200).end()
  },

  
