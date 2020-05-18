<template>
    <div>
        <order-header :title="title">
            <template v-slot:tip>
                <span>{{tip}}</span>
            </template>
        </order-header>
        <Router-view></Router-view>
        <server-bar></server-bar>
        <nav-footer></nav-footer>
    </div>
</template>
<script>
    import OrderHeader from './../components/OrderHeader'
    import ServerBar from './../components/ServerBar'
    import NavFooter from './../components/NavFooter'
    export default{
        name: 'order', // 组件名称或者页面名称
        data(){
            return {
                title: '',
                tip: '',

            }
        },
        components: {
            OrderHeader,
            NavFooter,
            ServerBar
        },
        mounted(){
            let path = this.$route.path;
            if(path == '/order/confirm'){
                this.title = '订单确认';
                this.tip = '请认真填写收货地址';
            }else if (path == '/order/list'){
                this.title = '订单列表';
                this.tip = '谨防钓鱼链接或诈骗电话,了解更多>';
            }else if(path == '/order/pay'){
                this.title = '订单支付';
                this.tip = '谨防钓鱼链接或诈骗电话,了解更多>';
            }
        },
        methods:{
            
        }
    }
</script>