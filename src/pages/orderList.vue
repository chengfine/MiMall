<template>
    <div class="order-list">
        <order-header title="订单列表">
            <template v-slot:tip>
                <span>谨防钓鱼链接或诈骗电话,了解更多></span>
            </template>
        </order-header>
    </div>
</template>
<script>
    import OrderHeader from './../components/OrderHeader'
    export default{
        name: 'order-list', // 组件名称或者页面名称
        components:{
            OrderHeader
        }
    }
</script>