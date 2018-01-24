<template>
  <div id="app">
    <!-- <router-view/> -->
    <mt-header fixed title="固定在顶部"></mt-header>
    <div class="a">
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="电影">
        <mt-cell v-for="n in 20" :title="'tab-container'+n"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="我的">
        <mt-cell v-for="n in 5" title="tab-container 2"></mt-cell>
      </mt-tab-container-item>
    </mt-tab-container>
    </div>
    <mt-tabbar fixed v-model="selected">
      <mt-tab-item id="电影">
        <img slot="icon" src=" ">
        外卖
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src=" ">
        订单
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
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .a{
    margin-top: 40px;
    height: calc(~"100vh - 40px - 47px");
    width: 100%;
  }
}
</style>
