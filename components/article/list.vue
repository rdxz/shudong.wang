<template>
  <div class="articles">
    <!-- 列表 -->
    <div class="article-list">
		<list-item v-for="(item,index) in article" :item="item" :key="index"></list-item>
    </div>
	
	<!-- 分页 -->
    <div class="text-right">
            <nav>
                <ul class="pagination">
                    <li>
                        <a href="#" aria-label="Previous">
                            <span aria-hidden="true">«</span>
                        </a>
                    </li>
                    <li :class="active"><a href="1">1</a></li>
                    <li><a href="2">2</a></li>
                    <li><a href="3">3</a></li>
                    <li><a href="4">4</a></li>
                    <li><a href="5">5</a></li>
                    <li>
                        <a href="#" aria-label="Next">
                            <span aria-hidden="true">»</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
  </div>
</template>

<script>
  import ListItem from './item.vue'
  // import ListHeader from './header.vue'
  let userlist = {
  	name: 'stark',
  	age: 19
  }
  export default {
    name: 'article-list',
    components: {
      ListItem,
      // ListHeader
    },
    props: {
      article: {
        type: Array
      }
    },
    computed: {
      // canLoadMore() {
      //   const { current_page, total_page } = this.article.data.pagination
      //   const hasArticles = this.article.data.pagination
      //   return hasArticles ? (current_page < total_page) : false
      // }
    },
    created() {
    	// console.log('test');
    	this.getData()
    },
    methods: {
    	getData(){
    		// console.log(this.article);
    		// this.article = this.article[0]
    	}
    }
  }
</script>

<style lang="scss" scoped>
  @import '~assets/sass/variables';
	.pagination, .pager li > a, .pager li > span {
	  -webkit-border-radius: 0px;
	  -moz-border-radius: 0px;
	  -ms-border-radius: 0px;
	  border-radius: 0px;
	}

	.pagination > li > a {
	  margin: 4px;
	  border: 0px;
	  color: #09c4f2;
	}

	.pagination > li:first-child > a, .pagination > li:first-child > span, .pagination > li:last-child > a, .pagination > li:last-child > span {
	  -webkit-border-radius: 0px;
	  -moz-border-radius: 0px;
	  -ms-border-radius: 0px;
	  border-radius: 0px;
	}

	.pagination > .active > a, .pagination > .active > a:focus, .pagination > .active > a:hover, .pagination > .active > span, .pagination > .active > span:focus, .pagination > .active > span:hover {
	  background-color: #09c4f2;
	}
  .articles {

    > .article-list-header {
    	margin-top:10rem;
      margin-bottom: 1em;
      position: relative;
      overflow: hidden;
      background-color: $module-bg;
    }

    > .article-list {
      margin-bottom: 1em;
      min-height: 1em;
      overflow: hidden;

      > .article-empty-box {
        background-color: $module-bg;
      }

      > .article-loading {
        height: 10em;
        background-color: $module-bg;
        display: flex;
      }

      > .article-errmsg {
        height: 10em;
        line-height: 10em;
        background-color: $module-bg;
        text-align: center;
        color: rgba(0, 0, 0, 0.38);
      }
    }

    > .article-load {

      > .btn-loadmore {
        width: 100%;
        display: block;
        height: 3em;
        line-height: 3em;
        background-color: $module-bg;

        &:hover {
          background-color: $module-hover-bg;
        }
      }
    }
  }
</style>
