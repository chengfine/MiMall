<template>
    <div>
        <order-header title="我的购物车">
            <template v-slot:tip>
                <span>温馨提示:插件开发及发我而乏味和覅我放假哦FJWIOEIO发呢的氛围</span>
            </template>
        </order-header>
        cart
        <nav-footer></nav-footer>
    </div>
</template>
<script>
    import OrderHeader from './../components/OrderHeader'
    import NavFooter from './../components/NavFooter'
    export default{
        name: 'cart', // 组件名称或者页面名称
        data(){
            return {

            }
        },
        components: {
            OrderHeader,
            NavFooter
        }
    }
</script>