<template>
    <div class="nav-bar">
        <div class="container">
            <div class="pro-title">
                小米8
            </div>
            <div class="pro-param">
                <a href="">概述</a><span>|</span>
                <a href="">参数</a><span>|</span>
                <a href="">用户评价</a><span>|</span>
                <slot name="buy"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'nav-bar',

    }
</script>

<style lang="scss">

</style>