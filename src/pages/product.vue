<template>
    <div>
        <Product-param>
            <template v-slot:buy>
                <button class="btn">立即购买</button>
            </template>
        </Product-param>
    </div>
</template>
<script>
    import ProductParam from './../components/ProductParam'
    export default{
        name: 'product', // 组件名称或者页面名称
        components: {
            ProductParam
        }
        
    }
</script>