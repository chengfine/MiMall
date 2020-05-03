<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children">
                <ul v-for="(item, i) in menuList" :key="i">
                  <li v-for="(sub, j) in item" :key="j">
                    <a :href="sub ? '/#/product/' + sub.id : '' ">
                      <img
                        :src="sub ? sub.img : '/imgs/item-box-1.png'"
                        :alt="sub ? sub.name : '小米CC9'"
                      />
                      {{sub ? sub.name : '小米CC9'}}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电视 盒子</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">笔记本 平板</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">家电 插线板</a>
              <div class="children"></div>
            </li>

            <li class="menu-item">
              <a href="javascript:;">出行 穿戴</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">智能 路由器</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电源 配件</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">生活 箱包</a>
              <div class="children"></div>
            </li>
          </ul>
        </div>
        <swiper :options="swiperOptions">
          <swiper-slide v-for="(item, index) in slideList" :key="index">
            <a :href="'/#/product/' + item.id">
              <img :src="item.img" />
            </a>
          </swiper-slide>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination" slot="pagination"></div>
          <!-- 如果需要导航按钮 -->
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="ads-box">
        <a :href="'/#/product/' + item.id" v-for="(item, index) in adsList" :key="index">
          <img :src="item.img" />
        </a>
      </div>
      <div class="banner">
        <a href="/#/product/30">
          <img src="/imgs/banner-1.png" alt />
        </a>
      </div>
    </div>
    <div class="product-box">
      <div class="container">
        <h2>手机</h2>
        <div class="wrapper">
          <div class="banner-left">
            <a href="/#/product/35">
              <img src="/imgs/mix-alpha.jpg" alt />
            </a>
          </div>
          <div class="list-box">
            <div class="list" v-for="(arr, i) in phoneList" :key="i">
              <div class="item" v-for="(item, j) in arr" :key="j">
                <span :class="j%2 == 0 ? 'new-pro' : 'kill-pro'">{{ j%2 == 0 ? '新品' : '秒杀'}}</span>
                <div class="item-img">
                  <img :src="item.mainImage" alt />
                </div>
                <div class="item-info">
                  <h3>{{item.name}}</h3>
                  <p>{{item.subtitle}}</p>
                  <p class="price">{{item.price}}元</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ServiceBar></ServiceBar>
  </div>
</template>
<script>
import ServiceBar from "./../components/ServerBar";
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "index", // 组件名称或者页面名称
  components: {
    Swiper,
    SwiperSlide,
    ServiceBar
  },
  //   directives: {
  //     swiper: directive
  //   },
  data() {
    return {
      swiperOptions: {
        autoplay: true,
        loop: true,
        effect: "cube",
        cubeEffect: {
          // slideShadows: true,
          // shadow: true,
          shadowOffset: 100,
          shadowScale: 0.6
        },
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        // 如果需要前进后退按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      slideList: [
        {
          id: "42",
          img: "/imgs/slider/slide-1.jpg"
        },
        {
          id: "45",
          img: "/imgs/slider/slide-2.jpg"
        },
        {
          id: "46",
          img: "/imgs/slider/slide-3.jpg"
        },
        {
          id: "",
          img: "/imgs/slider/slide-4.jpg"
        },
        {
          id: "",
          img: "/imgs/slider/slide-5.jpg"
        }
      ],
      menuList: [
        [
          {
            id: 30,
            img: "/imgs/item-box-1.png",
            name: "小米CC9"
          },
          {
            id: 31,
            img: "/imgs/item-box-2.png",
            name: "小米8青春版"
          },
          {
            id: 32,
            img: "/imgs/item-box-3.jpg",
            name: "Redmi K20 Pro"
          },
          {
            id: 33,
            img: "/imgs/item-box-4.jpg",
            name: "移动4G专区"
          }
        ],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ],
      adsList: [
        {
          id: 33,
          img: "/imgs/ads/ads-1.png"
        },
        {
          id: 48,
          img: "/imgs/ads/ads-2.jpg"
        },
        {
          id: 45,
          img: "/imgs/ads/ads-3.png"
        },
        {
          id: 47,
          img: "/imgs/ads/ads-4.jpg"
        }
      ],
      phoneList: []
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.axios
        .get("/products", {
          params: {
            categoryId: 100012,
            pageSize: 14
          }
        })
        .then(res => {
          console.log(res);
          res.list = res.list.slice(6, 14);
          this.phoneList = [res.list.slice(0, 4), res.list.slice(4, 8)];
        });
    }
  }
  //   filters: {
  //       currey(val) {
  //           if (!val) return '0.00';
  //             return val.toFixed(2) + '元'
  //       }
  //   }
};
</script>

<style lang="scss">
@import "./../assets/scss/base.scss";
@import "./../assets/scss/mixin.scss";

.index {
  .swiper-box {
    .nav-menu {
      position: absolute;
      z-index: 9;
      padding: 26px 0;
      height: 451px;
      width: 264px;
      box-sizing: border-box;
      background-color: #55585578;
      .menu-wrap {
        .menu-item {
          height: 50px;
          line-height: 50px;
          //   position: relative;
          a {
            position: relative;
            color: #ffffff;
            font-size: 16px;
            padding-left: 30px;
            display: block;
            &:after {
              content: "";
              @include bgImg(10px, 15px, "/imgs/icon-arrow.png");
              position: absolute;
              top: 17.5px;
              right: 30px;
            }
          }
          &:hover {
            background-color: #ff6600;
            .children {
              display: block;
              // height: 451px;
            }
          }
          .children {
            display: none;
            width: 962px;
            height: 451px;
            // height: 0px;
            // overflow: hidden;
            // transition: height 0.25s;
            background-color: #ffffff;
            position: absolute;
            top: 0;
            left: 264px;
            border: 1x solid #e5e5e5;
            ul {
              display: flex;
              justify-content: space-between;
              height: 75px;
              li {
                height: 75px;
                line-height: 75px;
                flex: 1;
                padding-left: 23px;
              }
              a {
                color: #333333;
                font-size: 14px;
              }
              img {
                width: 42px;
                height: 35px;
                vertical-align: middle;
                margin-right: 15px;
              }
            }
          }
        }
      }
    }
    .swiper-container {
      height: 451px;
      .swiper-button-prev {
        left: 274px;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .ads-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 14px;
    margin-bottom: 31px;
    a {
      width: 296px;
      height: 167px;
    }
  }
  .banner {
    margin-bottom: 50px;
  }
  .product-box {
    background-color: #f5f5f5;
    padding: 30px 0 50px;
    h2 {
      font-size: 22px;
      height: 21px;
      line-height: 21px;
      color: #333333;
      margin-bottom: 20px;
    }
    .wrapper {
      display: flex;
      .banner-left {
        margin-right: 16px;
        img {
          width: 224px;
          height: 619px;
        }
      }
      .list-box {
        .list {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 986px;
          margin-bottom: 14px;
          &:last-child {
            margin-bottom: 0px;
          }
          .item {
            width: 236px;
            height: 302px;
            background-color: #ffffff;
            text-align: center;
            span {
              display: inline-block;
              width: 67px;
              height: 24px;
              line-height: 24px;
              font-size: 14px;
              color: #ffffff;
              &.new-pro {
                background-color: #7ecf68;
              }
              &.kill-pro {
                background-color: #e82626;
              }
            }
            .item-img {
              img {
                height: 195px;
                width: 100%;
              }
            }
            .item-info {
              h3 {
                color: #333333;
                font-size: 14px;
                line-height: 14px;
                font-weight: bold;
              }
              p {
                color: #999999;
                line-height: 13px;
                margin: 6px auto 13px;
              }
              .price {
                color: #f20a0a;
                font-size: 14px;
                font-weight: bold;
                cursor: pointer;
                &:after {
                  content: "";
                  @include bgImg(22px, 22px, "/imgs/icon-cart-hover.png");
                  vertical-align: middle;
                  margin-left: 5px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
