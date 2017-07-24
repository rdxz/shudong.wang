<template>
  <div class="articles">
    <!-- 列表 -->
    <div class="article-list">
      <div class="container">
		    <div class="row">
		        <div class="col-md-9 margin-b-40">
	                <div class="blog-meta">
	                    <h2><a :href="'/article/'+item.id" v-html="item.title.rendered">{{item.title.rendered}}</a></h2>
	                    <ul class="list-inline">
	                        <li><i class="fa fa-user"></i> <a href="#">Admin</a></li>
	                        <li><i class="fa fa-calendar-check-o"></i> {{item.date}}</li>
	                        <li><i class="fa fa-tag"></i> <a href="#">Startups</a></li>
	                    </ul>
	                </div>
	                <div class="post-content">
	                    <p v-html="item.excerpt.rendered"></p>
	                    <a :href="'/article/'+item.id" class="btn btn-lg btn-skin">阅读更多</a>
	                </div>
		        </div>
		    </div>
		</div>
    </div>

  </div>
</template>

<script>
  // import ListItem from './item.vue'
  // import ListHeader from './header.vue'
  let userlist = {
  	name: 'stark',
  	age: 19
  }
  export default {
    name: 'article-list-item',
    components: {
      // ListItem,
      // ListHeader
    },
    props: {
      item: {
        type: Object
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
    		// console.log(this.item);
    		// this.article = this.article[0]
    	}
    }
  }
</script>

<style lang="scss" scoped>
  @import '~assets/sass/variables';
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
