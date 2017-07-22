/*
*
* 根数据状态 存放全局数据和异步方法
*
*/

// import Service from '~plugins/axios'
export const state = () => ({
  hot: {
    fetching: false,
    data: { data: [] }
  },
  list: {
    fetching: false,
    data: {
      pagination: {
        current_page: 0
      },
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
  // 获取文章详情
  loadArticleDetail({ commit }, params = {}) {
    // commit('article/REQUEST_DETAIL')
    return Service.get(`/wp-json/wp/v2/posts/${ params.article_id }`)
    .then(response => {
    	console.log(response);
      // const success = Object.is(response.statusText, 'OK') && Object.is(response.data.code, 1)
      // if(success) commit('article/GET_DETAIL_SUCCESS', response.data)
      // if(!success) commit('article/GET_DETAIL_FAILURE')
      return Promise.resolve(response.data)
    }, err => {
      commit('GET_DETAIL_FAILURE', err)
      return Promise.reject(err)
    })
  }
}

export const mutations = {
	GET_DETAIL_FAILURE(state) {
	    state.detail.fetching = false
	    state.detail.data = {}
	},
}
