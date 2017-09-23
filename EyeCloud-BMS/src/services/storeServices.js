import { request, config } from 'utils'

const { api } = config;
const { store,stores } = api;

export async function query (params) {
  return request({
    url: store,
    method: 'get',
    data: params,
  })
}

export async function create (params) {
  return request({
    url: store.replace('/:id', ''),
    method: 'post',
    data: params,
  })
}

export async function remove (params) {
  return request({
    url: store,
    method: 'delete',
    data: params,
  })
}

export async function update (params) {
  return request({
    url: store,
    method: 'put',
    data: params,
  })
}


export async function queryList (params) {
  return request({
    url: stores,
    method: 'post',
    data: params,
  })
}

export async function removeList (params) {
  return request({
    url: stores,
    method: 'delete',
    data: params,
  })
}
