<template>
    <div>
        <order-header></order-header>
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
        components: {
            OrderHeader,
            NavFooter,
            ServerBar
        }
    }
</script>