<template>
  <div class="product">
    <Product-param :title="product.name">
      <template v-slot:buy>
        <button class="btn" @click="buy">立即购买</button>
      </template>
    </Product-param>
    <div class="content">
      <div class="item-bg">
        <h2>{{product.name}}</h2>
        <h3>{{product.subtitle}}</h3>
        <p>
          <a href="" id="">全球首款双频 GPS</a>
          <span>|</span>
          <a href="" id="">骁龙845</a>
          <span>|</span>
          <a href="" id="">AI 变焦双摄</a>
          <span>|</span>
          <a href="" id="">红外人脸识别</a>
        </p>
        <div class="price">
          <span>¥</span><em>{{product.price}}</em>
        </div>
      </div>
      <div class="item-bg-2"></div>
      <div class="item-bg-3"></div>
      <div class="item-swiper">
        <swiper :options="swiperOption">
            <swiper-slide><img src="/imgs/product/gallery-2.png" alt=""></swiper-slide>
            <swiper-slide><img src="/imgs/product/gallery-3.png" alt=""></swiper-slide>
            <swiper-slide><img src="/imgs/product/gallery-4.png" alt=""></swiper-slide>
            <swiper-slide><img src="/imgs/product/gallery-5.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="/imgs/product/gallery-6.jpg" alt=""></swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
        <p class="desc">小米8 AI变焦双摄拍摄</p>
      </div>
      <div class="item-video">
        <h2>60帧超慢动作摄影<br/>慢慢回味每一瞬间的精彩</h2>
        <p>后置960帧电影般超慢动作视频，将眨眼间的灭秒展现的淋漓尽致！ <br/> 更能AI精准分析视频内容，15个场景智能匹配背景音效</p>
        <div class="video-bg" @click="showVideo"></div>
        <div class="video-box" v-show="showSlide">
          <div class="overlay"></div>
          <div class="video" :class="showSlide">
            <span class="icon-close" @click="closeVideo"></span>
            <video controls="controls" loop autoplay :src="src"></video>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProductParam from "./../components/ProductParam";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
export default {
  name: "product", // 组件名称或者页面名称
  components: {
    Swiper,
    SwiperSlide,
    ProductParam
  },
  data(){
    return{
      src:'',
      showSlide: '', // 控制动画效果
      product:{}, // 商品信息
      swiperOption:{
          autoplay:true,
          slidesPerView:3,
          spaceBetween: 30,
          freeMode: true,
          pagination: {
            el: '.swiper-pagination',
            clickable :true,
          }
        }
    }
  },
  mounted(){
    this.getProductInfo()
  },
  methods:{
    getProductInfo(){
      let id = this.$route.params.id;
      this.axios.get(`/products/${id}`).then((res)=>{
        this.product = res;
      })
    },
    buy(){
      let id = this.$route.params.id;
      this.$router.push(`/detail/${id}`);
    },
    showVideo(){
      this.showSlide = 'slideDown';
      this.src = '/imgs/product/video.mp4';

    },
    closeVideo(){
      this.showSlide = 'slideUp';
      setTimeout(()=> {
        this.showSlide='';
        this.src = ''
      },600)
    }
  }
};
</script>
<style lang="scss">
@import './../assets/scss/mixin.scss';
.product {
  div.h{
      height: 200px;
  }
  button {
    margin-left: 10px;
  }
  .content{
    .item-bg{
      @include bgImg( 100%, 718px, "/imgs/product/product-bg-1.png");
      text-align: center;
      background-size: cover;
      h2{
        font-size: 80px;
        padding-top: 55px;
      }
      h3{
        font-size: 24px;
        letter-spacing: 10px;
      }
      p{
        margin-top: 21px;
        margin-bottom: 40px;
        a{
          font-size: 16px;
          color: #333333;
        }
        span{
          margin: 0 15px;
        }
      }
      .price{
        font-size: 20px;
        color: #333333;
        em{
          font-style: normal;
          font-size: 38px;
        }
      }
    }
    .item-bg-2{
      @include bgImg( 100%, 480px, "/imgs/product/product-bg-2.png");
      background-size: 1226px 397px;
    }
    .item-bg-3{
      @include bgImg( 100%, 638px, "/imgs/product/product-bg-3.png");
      background-size: cover;
    }
    .item-swiper{
      margin: 36px auto 52px;
      .desc{
        font-size: 18px;
        color: #333333;
        text-align: center;
      }
      img{
        width: 100%;
      }
    }
    .item-video{
      height: 1044px;
      background-color: #070708;
      margin-bottom: 76px;
      color: #FFFFFF;
      text-align: center;
      h2 {
        font-size: 60px;
        padding-top: 82px;
        margin-bottom: 47px;
      }
      p{
        font-size: 24px;
        margin-bottom: 58px;
      }
      .video-bg{
        background: url('/imgs/product/gallery-1.png') no-repeat center;
        background-size: cover;
        width: 1226px;
        height: 540px;
        margin: 0 auto 120px;
        cursor: pointer;
      }
      // 弹窗模块功能
      .video-box {
        .overlay{
          @include position(fixed);
          background-color: #333333;
          opacity: .4;
          z-index: 10;
        }
        @keyframes slideDown{
          from{
            top:-50%;
            opacity: 0;
          }
          to{
            top:50%;
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from{
            top:50%;
            opacity: 1;
          }
          to{
            top:-50%;
            opacity: 0;
          }
        }
        .video{
          @include position(fixed, -50%, 50%);
          transform: translate(-50%, -50%);
          width: 1000px;
          height: 536px;
          z-index: 10;
          opacity: 1;
          // 动画
          &.slideDown{
            animation: slideDown .6s linear;
            top: 50%;
          }
          &.slideUp{
            animation: slideUp .6s linear;
          }
          .icon-close{
            position: absolute;
            top: 20px;
            right: 20px;
            @include bgImg(20px, 20px ,'/imgs/icon-close.png');
            cursor: pointer;
            z-index: 11;
          }
          video{
            width: 100%;
            height: 100%;
            object-fit: cover;
            outline: none;
          }
        }
      }
    }
  }
}
</style>