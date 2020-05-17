<template>
  <div class="order-header">
    <div class="container clearfix">
      <div class="header-logo">
        <a href="/#/index"></a>
      </div>
      <div class="title">
        <h2>{{title}}
          <slot name="tip"></slot>
        </h2>
      </div>
      <div class="username">
        <a href="javascript:;">{{username}}</a>
        <a href="javascript:;" @click="logout" style="margin-left: 10px">退出</a>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  name: "order-haeder",
  props:{
    title: String,
  },
  computed:{
    // username(){
    //   return this.$store.state.username;
    // },
    ...mapState(['username'])
  },
  methods:{
    logout(){

    }
  }
};
</script>

<style lang="scss">
  .order-header{
    padding: 30px 0;
    border-bottom: 2px solid #FF6600;
    .header-logo{
      float: left;
    }
    .title,.username{
      display: inline-block;
      height: 55px;
      line-height: 55px;
    }
    .title{
      float: left;
      margin-left: 55px;
      h2{
        font-size: 28px;
        color: #333333;
      }
      span {
        font-size: 14px;
        margin-left: 17px;
        color: #999999;
      }
    }
    .username{
      float: right;
      a{
        color: #666666;
        font-size: 16px;
      }
    }
  }
</style>