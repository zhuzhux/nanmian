<template>
  <div id="app">
    <mt-header fixed title="固定在顶部"></mt-header>
    <div class="content-wrap">
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="电影">
          <!-- <mt-cell v-for="n in 20" :title="'tab-container'+n"> -->
            <keep-alive>
              <router-view/>
            </keep-alive>
          <!-- </mt-cell> -->
        </mt-tab-container-item>
        <mt-tab-container-item id="我的">
          <!-- <mt-cell v-for="n in 5" title="tab-container 2"  is-link>
            <mt-button type="default">按钮</mt-button>
          </mt-cell>

          <mt-cell>
            <div> 123</div>
          </mt-cell> -->
          <dl v-for="i in 5">
            <dt>2</dt>
            <dd>1</dd>
          </dl>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <mt-tabbar fixed v-model="selected">
      <mt-tab-item id="电影">
        <span class="iconfont icon-dianying iconBlock"></span>
        电影
      </mt-tab-item>
      <mt-tab-item id="我的">
        <span class="iconfont icon-qiehuan-xue iconBlock"></span>
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      selected: '电影'
    }
  },
  created(){
    this.click1();
  },
  methods:{
    click1(){
      this.$router.push('/code1index')
      console.log(123)
    }
  }
}
</script>

<style lang="less" scoped>
@import 'http://at.alicdn.com/t/font_353117_zn7ad2ez0qaug14i.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  .iconBlock{
    display: block;
    padding-bottom: 5px;
  }
  .content-wrap{
    height: calc(~"100vh - 40px - 47px");
    width: 100%;
    margin-top: 40px;
    .mint-tab-container{
      margin-bottom: 47px;
    }
  }
}

</style>
