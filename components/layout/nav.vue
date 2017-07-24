<template>
  <header class="top-header navbar-default navbar navbar-static-top sticky-header yamm">
      <div class="container">
        <div class="pull-right nav-header-right">
          <div class="h-item dropdown-search" id="search-trigger">
              <a href="javascript:void(0)"><i class="fa fa-search"></i></a>
          </div>
        </div>
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <!-- <a class="navbar-brand" href="index.html"><img class="logo" src="/images/logo.png" alt="logo"></a> -->
        </div>
      <div id="navbar" class="navbar-collapse collapse">
        <ul class="nav navbar-nav navbar-right">
          <li>
            <nuxt-link :to="'/blog/'" class="nav-link" exact >
              首页
            </nuxt-link>
          </li>
         <!--  <li class="dropdown">
            <nuxt-link :to="'/learn'" class="nav-link" > 学习</nuxt-link>
          </li> -->
          <li class="dropdown">
            <nuxt-link :to="'/blog/'" class="nav-link" > 博客</nuxt-link>
          </li>
         <!--  <li class="dropdown">
            <nuxt-link :to="'/project'" class="nav-link" > 项目</nuxt-link>
          </li>   -->        

          <!-- <li class="dropdown">
            <nuxt-link :to="'/project'" class="nav-link" > 读书笔记</nuxt-link>
          </li> -->

        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'nav'
}
</script>

<style lang="scss" scoped>
@import '~assets/sass/variables';
.navbar-headroom {
  padding: 10px 0;
}
.navbar-headroom .nav-header-right .h-item a {
  color: #333;
}

.top-header {
  border: 0px;
  margin: 0px;
}
.top-header .navbar-nav > .active > a, .top-header .navbar-nav > .active > a:focus, .top-header .navbar-nav > .active > a:hover, .top-header .navbar-nav > .open > a, .top-header .navbar-nav > .open > a:focus, .top-header .navbar-nav > .open > a:hover {
  color: #09c4f2 !important;
  background-color: transparent;
}

.navbar-default {
  background-color: #fff;
}

.header-transparent {
  background-color: transparent;
  padding: 10px 0;
  -moz-transition: all 0.4s;
  -o-transition: all 0.4s;
  -webkit-transition: all 0.4s;
  transition: all 0.4s;
}

.header-transparent.shrink.navbar-inverse {
  background-color: rgba(0, 0, 0, 0.95);
  padding: 0px;
}

.header-transparent.shrink.navbar-default {
  background-color: rgba(255, 255, 255, 0.95);
  padding: 0px;
}

.navbar-default.header-transparent .navbar-nav > li > a {
  color: #eee;
}
.navbar-default.header-transparent .navbar-nav > li > a:hover {
  color: #09c4f2;
}

.navbar-default.header-transparent.shrink .navbar-nav > li > a {
  color: #333;
}
.navbar-default.header-transparent.shrink .navbar-nav > li > a:hover {
  color: #09c4f2;
}

.top-header .navbar-nav > li > a {
  text-transform: uppercase;
  font-weight: 500;
  font-size: 13px;
  letter-spacing: 0px;
  font-family: "Poppins", sans-serif;
}
.top-header .navbar-nav > li > a:hover {
  color: #09c4f2;
}

  .aside-nav {
    position: fixed;
    top: 5.5em;
    display: inline-block;
    width: 11.5em;

    .nav-list {
      padding: 0;
      margin: 0;

      > .item-hr {
            margin: 2em 1em 1em 1em;
    border-top: 1px dashed #d6d6d6;
      }

      > .item {
        border: none;
        display: block;
        width: 100%;
        height: 3em;
        line-height: 3em;
        padding: 0 1em;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: 700;
        border-radius: 1px;
        color: #777;
        font-family: CenturyGothic;
        margin-bottom: .5em;

        &.app {
          // margin-top: 0em;
          // color: $primary;
        }

        &:last-child {
          margin-bottom: 0;
        }

        &:hover {
          color: $primary;
        }

        &.link-active {
          background-color: #eee;
          font-weight: bold;
          color: $primary;
          background-color: $module-bg;
        }

        .iconfont {
          width: 1em;
          margin-right: 1em;
          display: inline-block;
        }
      }
    }
  }
</style>
