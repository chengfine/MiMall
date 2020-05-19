<template>
  <div class="order-list">
    <order-header title="订单列表">
      <template v-slot:tip>
        <span>谨防钓鱼链接或诈骗电话,了解更多></span>
      </template>
    </order-header>
    <div class="wrapper">
      <div class="container">
        <div class="order-box">
          <loading v-if="loading"></loading>
          <div class="order" v-for="(order, index) in list" :key="index">
            <div class="order-title clearfix">
              <div class="item info fl">
                {{order.createTime}}
                <span>|</span>
                {{order.receiverName}}
                <span>|</span>
                订单号:{{order.orderNo}}
                <span>|</span>
                {{order.paymentTypeDesc}}
              </div>
              <div class="item-money fr">
                <span>应付金额:</span>
                <span class="money">{{order.payment}}</span>
                <span>元</span>
              </div>
            </div>
            <div class="order-content clearfix" >
              <div class="good-box fl">
                <div class="good-list" v-for="(m , n) in order.orderItemVoList" :key="n">
                  <div class="good-img">
                    <img v-lazy="m.productImage" :alt="m.productName" />
                  </div>
                  <div class="good-name">
                    <div class="p-name">{{m.productName}}</div>
                    <div class="p-money">{{m.totalPrice+ 'x' + m.quantity}}元</div>
                  </div>
                </div>
              </div>
              <div class="good-state fr" v-if="order.status === 20">
                <a href="javascript:;">{{order.statusDesc}}</a>
              </div>
              <div class="good-state fr" v-else>
                <a href="javascript:;" @click="goPay(order.orderNo)">{{order.statusDesc}}</a>
              </div>
            </div>
          </div>

          <el-pagination
            v-if="false"
            class="pagination"
            background
            layout="prev, pager, next"
            :total="total"
            :pageSize= "pageSize"
            @current-change="handleChange"
          >
          </el-pagination>

          <div class="load-more" v-if="showNextPage">
            <el-button type="primary" :loading="loading" @click="loadMore">加载更多</el-button>
          </div>

          <div class="scroll-more"
            v-infinite-scroll="scrollMore"
            infinite-scroll-disabled="busy"
            infinite-scroll-distance="410" 
          >
            <img src="/imgs/loading-svg/loading-spinning-bubbles.svg" alt="" v-show="loading">
          </div>
          <no-data v-if="!loading && list.length == 0"></no-data>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Loading from './../components/Loading';
import OrderHeader from "./../components/OrderHeader";
import NoData from './../components/NoData';
import { Pagination, Button } from 'element-ui';
import infiniteScroll from 'vue-infinite-scroll'
export default {
  name: "order-list", // 组件名称或者页面名称
  
  data(){
      return {
          list:[],
          loading: false,
          pageSize: 2,
          pageNum: 1,
          total: 0,
          showNextPage: true, //是否显示加载更多按钮
          busy: false, // 滚动加载是否触发
          
      }
  },
  directives:{
    infiniteScroll
  },
  components: {
    OrderHeader,
    Loading,
    NoData,
    [Pagination.name]: Pagination,
    [Button.name]: Button,
  },
  mounted(){
      this.getOrderList();
  },
  methods:{
      getOrderList(){
          this.loading = true;
          this.busy = true;
          this.axios.get('./orders', {
            params:{
              pageSize: 10,
              pageNum: this.pageNum
            }
          }).then((res)=>{
            this.loading = false;
            this.list = this.list.concat(res.list);
            this.total = res.total;

            this.showNextPage = res.hasNextPage;

            this.busy = false;
          }).catch(()=>{
            this.loading = false;
            this.busy = true;
            this.showNextPage = false;
          })
      },
       goPay(orderNo){
           // 三种路由跳转方式
           // this.$router.push('/order/pay)
           /*this.$router.push({
               name: 'order-pay', // 这个name,不是路径,是router.js里面的路由名称
               query:{
                   orderNo
               }
           });*/
           this.$router.push({
               path: '/order/pay',
               query: {
                   orderNo
               }
           })
       },
       // 第一种方法: 分页器
       handleChange(pageNum){
         this.pageNum = pageNum;
         this.getOrderList();
       },
       // 第二种方法: 加载更多按钮
       loadMore(){
         this.pageNum++;
         this.getOrderList();
       },
       // 第三种方法: 滚动加载, 通过npm 插件实现
       scrollMore(){
          this.busy= true;
          setTimeout(() => {
            this.pageNum++;
            this.getScrollList();
            this.busy = false;
          }, 1000);
       },
       // 专门给scrollMore使用
       getScrollList(){
         this.loading = true;
          this.axios.get('./orders', {
            params:{
              pageSize: this.pageSize,
              pageNum: this.pageNum
            }
          }).then((res)=>{
            this.loading = false;
            this.list = this.list.concat(res.list);
            if(res.hasNextPage){
              this.busy = false;
            }else{
              this.busy = true;
            }
          })
      },
  }
};
</script>

<style lang="scss">
  @import './../assets/scss/config.scss';
  @import './../assets/scss/mixin.scss';
  .order-list{
    .wrapper{
      background-color:$colorJ;
      padding-top:33px;
      padding-bottom:110px;
      .order-box{
        .order{
          @include border();
          background-color:$colorG;
          margin-bottom:31px;
          &:last-child{
            margin-bottom:0;
          }
          .order-title{
            @include height(74px);
            background-color:$colorK;
            padding:0 43px;
            font-size:16px;
            color:$colorC;
            .item-info{
              span{
                margin:0 9px;
              }
            }
            .money{
              font-size:26px;
              color:$colorB;
            }
          }
          .order-content{
            padding:0 43px;
            .good-box{
              width:88%;
              .good-list{
                display: flex;
                align-items: center;
                height:145px;
                .good-img{
                  width:112px;
                  img{
                    width:100%;
                  }
                }
                .good-name{
                  font-size:20px;
                  color:$colorB;
                }
              }
            }
            .good-state{
              @include height(145px);
              font-size: 20px;
              color:$colorA;
              a{
                color:$colorA;
              }
            }
          }
        }
        .pagination{
          text-align:right;
        }
        .el-pagination.is-background .el-pager li:not(.disabled).active{
          background-color: #FF6600;
        }
        .el-button--primary{
          background-color: #FF6600;
          border-color: #FF6600;
        }
        .load-more,.scroll-more{
          text-align:center;
        }
      }
    }
  }
</style>