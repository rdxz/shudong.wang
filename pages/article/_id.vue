<template>
	<div>
		        <div class="container">

            <div class="row">
                <div class="col-md-9 margin-b-40">

                    <div class="post-full">
                        <div class="blog-meta">
                            <h2><a href="#">{{detail.title.rendered}}</a></h2>
                            <ul class="list-inline">
                                <li><i class="fa fa-user"></i> <a href="#">Admin</a></li>
                                <li><i class="fa fa-calendar-check-o"></i> {{detail.date}}</li>
                                <li><i class="fa fa-tag"></i> <a href="#">Startups</a></li>
                            </ul>
                        </div><!--post meta end-->
                        <div class="post-thumbnail">
                            <img src="images/show-3.jpg" alt="" class="img-responsive">
                        </div>
                        <div class="post-content">
                           <p v-html="detail.content.rendered"></p>
                        </div>
                    </div><!--post end-->
                    <hr><div class="space-40"></div>
                    
                    <hr class="space-40">
                    <div class="leave-comment">
                        <h3>Leave a comment</h3>
                        <form class="comment-form">
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <input name="author" type="text" placeholder="Name" class="form-control">
                                    </div> 
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <input name="email" type="text" placeholder="Email" class="form-control">
                                    </div> 
                                </div>
                            </div>
                            <div class="form-group">
                                <textarea placeholder="Comment" rows="5" class="form-control"></textarea>
                            </div>
                            <div class=" text-right">
                                <button type="button" class="btn btn-dark btn-xl">Post Comment</button>
                            </div>
                        </form>
                    </div>



                </div>
                <div class="col-md-3">
                    <div class="widget">
                        <h3>Search blog</h3>
                        <form>
                            <input type="text" class="form-control" placeholder="Searc &amp; hit enter">
                        </form>
                    </div><!--end widget-->
                    <div class="widget">
                        <h3>Post categories</h3>
                        <ul class="list-unstyled">
                            <li><a href="#">Web design</a></li>
                            <li><a href="#">Bootstrap4</a></li>
                            <li><a href="#">Angular js</a></li>
                            <li><a href="#">Jquery</a></li>
                        </ul>
                    </div><!--end widget-->
                    <div class="widget">
                        <h3>About Author</h3>
                        <p>
                            Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño.
                        </p>
                    </div><!--end widget-->
                    <div class="widget">
                        <h3>Tags</h3>
                        <ul class="list-inline tag-list">
                            <li><a href="#">Web design</a></li>
                            <li><a href="#">Bootstrap4</a></li>
                            <li><a href="#">Angular js</a></li>
                            <li><a href="#">Jquery</a></li>
                        </ul>
                    </div><!--end widget-->
                </div>
            </div>


        </div><!--container-end-->
	</div>
</template>
<script>
	export default {
		name: 'article-detail',
		// validate({ params, query }) {
		// 	console.log(params);
		//   return true // 如果参数有效
		//   return false // 参数无效，Nuxt.js 停止渲染当前页面并显示错误页面
		// },
		// fetch ({ store, params }) {
	 //      return store.dispatch('loadArticleDetail', params)
	 //    },
        fetch ({ store, params }) {
          return Promise.all([
            store.dispatch('loadArticleDetail',params),
            // store.dispatch('loadAnnouncements')
          ])
        },
        created (){
            // console.log(detail);
        },
        computed: {
          detail () {
            // console.log(this.$store.state.detail.data);
            return this.$store.state.detail.data
          }
        },
        methods: {
          loadmoreArticle() {
            this.$store.dispatch('loadArticleDetail')
          }
        }
	}
</script>
<style>
	
</style>