<template>
  <div class="product">
    <Product-param>
      <template v-slot:buy>
        <button class="btn">立即购买</button>
      </template>
    </Product-param>
    <div class="h">123</div>
    <div class="h">123</div>
    <div class="h">123</div>
    <div class="h">123</div>
    <div class="h">123</div>
    <div class="h">123</div>
    <div class="h">123</div>
    <div class="h">123</div>
    <div class="h">123</div>
    <div class="h">123</div>
    <div class="h">123</div>
    <div class="h">123</div>
    <div class="h">123</div>
    <div class="h">123</div>

  </div>
</template>
<script>
import ProductParam from "./../components/ProductParam";
export default {
  name: "product", // 组件名称或者页面名称
  components: {
    ProductParam
  }
};
</script>
<style lang="scss">
.product {
    div.h{
        height: 200px;
    }
  button {
    margin-left: 10px;
  }
}
</style>