<template>
    <div>
        home
        <nav-header></nav-header>
        <router-view></router-view>
        <nav-footer></nav-footer>
    </div>
</template>
<script>
    import NavHeader from './../components/NavHeader'
    import NavFooter from './../components/NavFooter'
    export default{
        name: 'nav-home', // 组件名称或者页面名称
        components: {
            NavHeader,
            NavFooter
        }
    }
</script>