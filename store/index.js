/*
*
* 根数据状态 存放全局数据和异步方法
*
*/

import Service from '~plugins/axios'
export const state = () => ({
  list: {
    data: {
      data: []
    }
  },
  detail: {
    fetching: false,
    data: {}
  }
})


// // global actions
export const actions = {

  // 全局服务初始化
  nuxtServerInit(store, { params, route, isServer, req }) {
    const initAppData = [
      store.dispatch('loadArticles'),
    ]
    return Promise.all(initAppData)
  },
// 获取文章列表
  loadArticles({ commit }, params = { page: 1 }) {

    // commit('wp-json/wp/v2/posts')
    return Service.get('/wp-json/wp/v2/posts', { params })
    .then(response => {
      // const success = Object.is(response.statusText, 'OK') && Object.is(response.data.code, 1)
      // const isFirstPage = params.page && params.page > 1
      // const commitName =  `GET_LIST_SUCCESS`
      let data = response.data
      commit('GET_LIST_SUCCESS', data)
      // if(!success) commit('article/GET_LIST_FAILURE')
    })
    .catch(err => {
      commit('GET_LIST_SUCCESS', err)
    })
  },
  loadArticleDetail({ commit }, params = {}) {
    // commit('article/REQUEST_DETAIL')
    return Service.get(`/wp-json/wp/v2/posts/${ params.id }`)
    .then(response => {
      console.log(response);
      // const success = Object.is(response.statusText, 'OK') && Object.is(response.data.code, 1)
      // if(success) 
      commit('GET_DETAIL_SUCCESS', response.data)
      // if(!success) commit('article/GET_DETAIL_FAILURE')
      return Promise.resolve(response.data)
    }, err => {
      commit('GET_DETAIL_FAILURE', err)
      return Promise.reject(err)
    })
  }
}

export const mutations = {
  GET_LIST_SUCCESS(state, action) {
    state.list.data = action
  },
  GET_DETAIL_SUCCESS(state, action) {
    // state.detail.fetching = false
    state.detail.data = action
  },
  GET_DETAIL_FAILURE(state) {
    // state.detail.fetching = false
    state.detail.data = {}
  },
}
