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
  }
})


// // global actions
export const actions = {
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
  }
}

export const mutations = {
  GET_LIST_SUCCESS(state, action) {
    // state.list.fetching = false
    // console.log(action);
    // console.log(1111111);
    state.list.data = action
  }
}
