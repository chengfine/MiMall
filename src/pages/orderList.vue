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
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import OrderHeader from "./../components/OrderHeader";
export default {
  name: "order-list", // 组件名称或者页面名称
  data(){
      return {
          list:[]
      }
  },
  components: {
    OrderHeader
  },
  mounted(){
      this.getOrderList();
  },
  methods:{
      getOrderList(){
          this.axios.get('./orders').then((res)=>{
              this.list = res.list
          })
      },
       goPay(orderNo){
           // 三种路由跳转方式
           // this.$router.push('/order/pay)....
           /*this.$router.push({
               name: 'order-pay',
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
       }
  }
};
</script>

<style lang="scss">
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
.order-list {
  .wrapper {
    background-color: $colorJ;
    padding-top: 33px;
    padding-bottom: 110px;
    .order-box {
      .order {
        // @include border();
        background-color: $colorG;
        margin-bottom: 31px;
        &:last-child {
          margin-bottom: 0;
        }
        .order-title {
          //   @include height(74px);
          background-color: $colorK;
          padding: 0 43px;
          font-size: 16px;
          color: $colorC;
          .item-info {
            span {
              margin: 0 9px;
            }
          }
          .money {
            font-size: 26px;
            color: $colorB;
          }
        }
        .order-content {
          padding: 0 43px;
          .good-box {
            width: 88%;
            .good-list {
              display: flex;
              align-items: center;
              height: 145px;
              .good-img {
                width: 112px;
                img {
                  width: 100%;
                }
              }
              .good-name {
                font-size: 20px;
                color: $colorB;
              }
            }
          }
          .good-state {
            // @include height(145px);
            font-size: 20px;
            color: $colorA;
            a {
              color: $colorA;
            }
          }
        }
      }
    }
  }
}
</style>