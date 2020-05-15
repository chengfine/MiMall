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
};
</script>

<style lang="scss">
  .order-header{
    // height: 112px;
    padding: 30px 0;
    .header-logo{
      float: left;
    }
    .title,.username{
      display: inline-block;
      height: 55px;
      line-height: 55px;
    }
    .title{
      font-size: 28px;
      float: left;
      color: #333333;
      margin-left: 55px;
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