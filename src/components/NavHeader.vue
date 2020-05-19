<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MIUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;" v-if="username">{{username}}</a>
          <a href="javascript:;" v-if="!username" @click="login">登录</a>
          <a href="javascript:;" v-if="username" @click="logout">退出</a>
          <a href="/#/order/list" v-if="username">我的订单</a>
          <a href="javascript:;" class="my-cart" @click="goToCart">
            <span class="icon-cart"></span>购物车({{cartCount}})
          </a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li class="product">
                  <a href target="_blank">
                    <div class="pro-img">
                      <img
                        v-lazy="'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82ddffd7562c54f9166fa876c143ff22.png?thumb=1&w=160&h=110&f=webp&q=90'"
                        alt
                      />
                    </div>
                    <div class="pro-name">小米10 Pro</div>
                    <div class="pro-price">4999元起</div>
                  </a>
                </li>
                <li class="product">
                  <a href target="_blank">
                    <div class="pro-img">
                      <img
                        v-lazy="'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82ddffd7562c54f9166fa876c143ff22.png?thumb=1&w=160&h=110&f=webp&q=90'"
                        alt
                      />
                    </div>
                    <div class="pro-name">小米10 Pro</div>
                    <div class="pro-price">4999元起</div>
                  </a>
                </li>
                <li class="product">
                  <a href target="_blank">
                    <div class="pro-img">
                      <img
                        v-lazy="'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82ddffd7562c54f9166fa876c143ff22.png?thumb=1&w=160&h=110&f=webp&q=90'"
                        alt
                      />
                    </div>
                    <div class="pro-name">小米10 Pro</div>
                    <div class="pro-price">4999元起</div>
                  </a>
                </li>
                <li class="product">
                  <a href target="_blank">
                    <div class="pro-img">
                      <img
                        v-lazy="'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82ddffd7562c54f9166fa876c143ff22.png?thumb=1&w=160&h=110&f=webp&q=90'"
                        alt
                      />
                    </div>
                    <div class="pro-name">小米10 Pro</div>
                    <div class="pro-price">4999元起</div>
                  </a>
                </li>
                <li class="product">
                  <a href target="_blank">
                    <div class="pro-img">
                      <img
                        v-lazy="'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82ddffd7562c54f9166fa876c143ff22.png?thumb=1&w=160&h=110&f=webp&q=90'"
                        alt
                      />
                    </div>
                    <div class="pro-name">小米10 Pro</div>
                    <div class="pro-price">4999元起</div>
                  </a>
                </li>
                <li class="product">
                  <a href target="_blank">
                    <div class="pro-img">
                      <img
                        v-lazy="'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82ddffd7562c54f9166fa876c143ff22.png?thumb=1&w=160&h=110&f=webp&q=90'"
                        alt
                      />
                    </div>
                    <div class="pro-name">小米10 Pro</div>
                    <div class="pro-price">4999元起</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>ReaMi红米</span>
            <div class="children">
              <ul>
                <li class="product" v-for="(item, index) in phoneList" :key = "index">
                  <a :href="'/#/product/' + item.id" target="_blank">
                    <div class="pro-img">
                      <img
                        v-lazy="item.mainImage"
                        :alt="item.name"
                        :title="item.subtitle"
                      />
                    </div>
                    <div class="pro-name">{{item.name}}</div>
                    <div class="pro-price">{{item.price | currency}}</div>
                  </a>
                </li>
                
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children">
              <ul>
                <li class="product" v-for="(item, index) in tvList" :key="index"> 
                  <a :href="'/#/product/'+item.id " target="_blank">
                    <div class="pro-img">
                      <img
                        v-lazy="item.url"
                        :alt="item.name"
                        :title="item.subtitle"
                      />
                    </div>
                    <div class="pro-name">{{item.name}}</div>
                    <div class="pro-price">{{item.price | currency }}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword" />
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex';
export default {
  name: "nav-header", // 组件名称或者页面名称
  data () {
    return {
      // username: this.$store.state.username,
      phoneList:[],
      tvList: [
        {id: 1, categoryId: 100012, name: "小米壁画电视 65英寸", subtitle: "小米壁画电视 65英寸", url: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/00f597a8725eee9245e383c35cd4f7b6.jpg?thumb=1&w=160&h=110", price: 6999},
        {id: 2, categoryId: 100012, name: "Redmi 红米电视 70英寸", subtitle: "Redmi 红米电视 70英寸", url: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6917267948c54c647d2009a98637aac6.jpg?thumb=1&w=160&h=110&f=webp&q=90", price: 3199},
        {id: 3, categoryId: 100012, name: "小米全面屏电视 55英寸", subtitle: "小米全面屏电视 55英寸", url: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/a40904b6a053b73b631a152334388d0e.jpg?thumb=1&w=160&h=110", price: 1789},
        {id: 4, categoryId: 100012, name: "小米电视4A 32英寸", subtitle: "小米电视4A 32英寸", url: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e8f4e22f6d591825f8f150b3309c750b.png?thumb=1&w=160&h=110", price: 699},
        {id: 5, categoryId: 100012, name: "小米电视4A 55英寸", subtitle: "小米电视4A 55英寸", url: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/bf72a3e9a6e799cb71ecfa7d80465351.jpg?thumb=1&w=160&h=110", price: 1699},
        {id: 6, categoryId: 100012, name: "Redmi 智能电视 MAX 98'", subtitle: "Redmi 智能电视 MAX 98'", url: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0112cb7e2ea8489fbd36ce3a781d5232.jpg?thumb=1&w=160&h=110&f=webp&q=90", price: 19999}
      ],
    }
  },
  computed:{
    // username(){
    //   return this.$store.state.username;
    // },
    // cartCount(){
    //   return this.$store.state.cartCount;
    // },
    ...mapState(['username', 'cartCount'])
  },
  filters: {
    currency (val) {
      if(!val) return '0.00';
      return '¥' + val.toFixed(2) + '元';
    }
  },
  mounted () {
    this.getProductList();
  },
  methods: {
    login(){
      this.$router.push('/login');
    },
    logout(){
      this.axios.post('/user/logout').then((res)=>{
        this.$message.success('退出成功');
        this.$cookie.set('userId','',{expires:'-1'});
        this.$store.dispatch('saveUserName', '');
        this.$store.dispatch('saveCartCount', '0');
      })
    },
    getProductList () {
      this.axios.get('/products', {
        params: {
          categoryId:'100012',
          pageSize:6
        }
      }).then( (res)=> {
        this.phoneList = res.list
      })
    },
    goToCart() {
      this.$router.push('/cart');
    }
  }
};
</script>
<style lang="scss">
@import "./../assets/scss/base.scss";
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/config.scss";

.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: #333333;
    color: #b0b0b0;
    .container {
      @include flex();
      a {
        display: inline-block;
        color: #b0b0b0;
        margin-right: 17px;
      }
      .my-cart {
        width: 110px;
        background-color: #ff6600;
        text-align: center;
        color: #ffffff;
        margin-right: 0;
        .icon-cart {
          @include bgImg(16px, 12px, "/imgs/icon-cart-checked.png");
          margin-right: 4px;
        }
      }
    }
  }
  .nav-header {
    .container {
      height: 112px;
      @include flex();
      position: relative;
      
      .header-menu {
        display: inline-block;
        padding-left: 209px;
        width: 643px;
        .item-menu {
          display: inline-block;
          color: #333333;
          font-weight: bold;
          font-size: 16px;
          line-height: 112px;
          padding-right: 20px;
          cursor: pointer;
          // span {
          //   cursor: pointer;
          // }
          &:hover {
            color: $colorA;
            .children {
              height: 220px;
              opacity: 1;
            }
          }
          .children {
            position: absolute;
            top: 112px;
            left: 0;
            width: 1226px;
            height: 0px;
            opacity: 0;
            overflow: hidden;
            border-top: 1px solid #e5e5e5;
            box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
            transition: height 0.8s;
            background-color: #ffffff;
            z-index: 11;
          }
          .product {
            position: relative;
            float: left;
            width: 16.6%;
            height: 220px;
            font-size: 12px;
            line-height: 12px;
            text-align: center;
            a {
              display: inline-block;
            }
            img {
              width: auto;
              height: 111px;
              margin-top: 26px;
            }
            .pro-img {
              height: 137px;
            }
            .pro-name {
              margin-top: 19px;
              margin-bottom: 8px;
              color: $colorB;
            }
            .pro-price {
              color: $colorA;
            }
            &:before {
              content: "";
              position: absolute;
              right: 0;
              top: 33px;
              border-left: 1px solid $colorF;
              height: 100px;
            //   width: 1px;
            }
            &:last-child:before{
                display: none;
            }
          }
        }
      }
      .header-search {
        width: 319px;
        .wrapper {
          height: 50px;
          border: 1px solid #e0e0e0;
          display: flex;
          align-items: center;
          input {
            border: none;
            border-right: 1px solid #e0e0e0;
            width: 264px;
            height: 50px;
            padding-left: 14px;
            box-sizing: border-box;
          }
          a {
            @include bgImg(18px, 18px, "./../../public/imgs/icon-search.png");
            margin-left: 17px;
          }      
        }
      }
    }
  }
}
</style>
