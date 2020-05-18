<template>
    <div>
        <Router-view></Router-view>
        <server-bar></server-bar>
        <nav-footer></nav-footer>
    </div>
</template>
<script>
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
            NavFooter,
            ServerBar
        }
    }
</script>