<template>
  <div class="slider">
    <mt-navbar fixed v-model="active">
      <mt-tab-item id="slide1">选项一</mt-tab-item>
      <mt-tab-item id="slide2">选项二</mt-tab-item>
      <mt-tab-item id="slide3">选项三</mt-tab-item>
      <mt-tab-item id="slide4">选项四</mt-tab-item>
    </mt-navbar>

    <mt-tab-container class="page-tabbar-tab-container" v-model="active">
      <mt-tab-container-item id="slide1">
       <ul>
         <li v-for="(i,k) in data1" @click="playShow=!playShow;axiosplayurl(data1[k].href)">
           <div>
            <img :src="data1[k].imgSrc" alt="">
           </div>
           <p>{{data1[k].title}}</p>
           <p>{{data1[k].time}}</p>
           <span>{{data1[k].href}}</span>
         </li>
       </ul>


      </mt-tab-container-item>
      <mt-tab-container-item id="slide2">
        <ul>
         <li v-for="(i,k) in data2" @click="playShow=!playShow">
           <div>
            <img :src="data2[k].imgSrc" alt="">
           </div>
           <p>{{data2[k].title}}</p>
           <p>{{data2[k].time}}</p>
           <span>{{data2[k].href}}</span>
         </li>
       </ul>
      </mt-tab-container-item>
      <mt-tab-container-item id="slide3">
        <ul>
         <li v-for="(i,k) in data1" @click="playShow=!playShow">
           <div>
            <img :src="data1[k].imgSrc" alt="">
           </div>
           <p>{{data1[k].title}}</p>
           <p>{{data1[k].time}}</p>
           <span>{{data1[k].href}}</span>
         </li>
       </ul>
      </mt-tab-container-item>
      <mt-tab-container-item id="slide4">
        <ul>
         <li v-for="(i,k) in data2" @click="playShow=!playShow">
           <div>
            <img :src="data2[k].imgSrc" alt="">
           </div>
           <p>{{data2[k].title}}</p>
           <p>{{data2[k].time}}</p>
           <span>{{data2[k].href}}</span>
         </li>
       </ul>
      </mt-tab-container-item>
    </mt-tab-container>

    <transition :name="transitionName">
      <div class="play-wrap" v-if="playShow">
        <mt-header :title="playtitle">
          <span to="/" slot="left" @click="playShow=!playShow">
            <mt-button icon="back">返回</mt-button>
          </span>
        </mt-header>
        <div>
          <video controls autobuffer :src="playurl" width="100%"></video>
        </div>
      </div>
    </transition>

  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'code1index',
  data () {
    return {
      transitionName: 'slide-left',
      active: 'slide1',
      data1: [],
      data2: [],
      data3: [],
      data4: [],
      allLoaded: false,
      bottomText: '上拉加载更多...',
      scrollMode: 'auto',
      proCopyright: [],
      playtitle: '动态标题',
      playShow: false,
      playurl: ''
    }
  },
  methods: {
    ajax_index(){
      var vm = this;
      //参数是obj使用qs转化
      var qs = require('querystring')
      axios.post('http://xdy.wxjii.cn/p/ajax_4_next.php', qs.stringify({
        type: 1,
        id: 'HHMP4',
        page: 2
      }))
      .then(function (response) {
      // console.log(this.data1)
        if(response){
          for(let i=0;i<response.data.data.length;i++){
            vm.data1.push(response.data.data[i])
          }
          console.log(vm.data);
        }
      })
      .catch(function (error) {
        console.log('错误');
      });
      axios.post('http://xdy.wxjii.cn/p/ajax_4_next.php', qs.stringify({
        type: 1,
        id: 'HHMP4',
        page: 3
      }))
      .then(function (response) {
      // console.log(this.data1)
        if(response){
          for(let i=0;i<response.data.data.length;i++){
            vm.data2.push(response.data.data[i])
          }
          console.log(vm.data);
        }
      })
      .catch(function (error) {
        console.log('错误');
      });
    },
    axiosplayurl(str){
			var html = str.substring(7,20);
      var page = (str.substr(str.length-9)).substr(0,4);
      var _aHref = "http://"+html+"/mov/player/"+page+"-1-1.html";
      console.log(_aHref)
      var vm = this;
      //参数是obj使用qs转化
      var qs = require('querystring')
      axios.post('http://xdy.wxjii.cn/p/ajax_4_play.php', qs.stringify({
        aHref: _aHref,
      }))
      .then(function (response) {
      // console.log(this.data1)
        if(response){
          // for(let i=0;i<response.data.data.length;i++){
          //   vm.data2.push(response.data.data[i])
          // }
          console.log(vm.playurl);
          var url = response.data.replace(/%2F/g, '/');
          url = url.replace('%3A', ':');
          // var video = document.getElementById('videoObj');
          vm.playurl = url;
          console.log(url)
        }
      })
      .catch(function (error) {
        console.log('错误');
      });
    }    
    // ,
    // clicklist(){
    //   axiosplayurl(str)
    // }
  },
  created () {
    this.ajax_index();
  },
  updated() {
    // if(this.active!=this.active){
      window.scroll(0, 0);
    // }
  }
  // ,
  // playShowC(){
  //   !playShow
  // }
}
</script>
<style lang="less" scoped>
.slider{
  margin-top: 40px;
}
.is-fixed{
  top: 40px;
  height: 40px;
}
li{
  display: inline-block;
  margin: 10px 5px 0;
  width: calc(~"(100vw - 30px) / 3");
  height: 200px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-sizing: border-box;
  img,div{
    width: 100%;
    height: 160px;
    border-radius: 8px;
  }
  p{
    margin-top: 5px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 12px;
  }
  span{
    display: none;
  }
}
.play-wrap{
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  transition: all .5s cubic-bezier(.55,0,.1,1);
  background-color: #fff;
}

.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  transform: translate3d(30px, 0, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  transform: translate3d(30px, 0, 0);
}
</style>

