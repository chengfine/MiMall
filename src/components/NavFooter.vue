<template>
    <div class="footer">
        <div class="footer-logo">
            <img src="/imgs/logo-footer.png" alt="">
            <p>小米商城</p>
        </div>
        <div class="footer-link">
            <a href="https://www.mi.com/index.html" target="_blank">小米商城</a><span>|</span>
            <a href="https://www.miui.com" target="_blank">MIUI</a><span>|</span>
            <a href="https://home.mi.com/index.html" target="_blank">米家</a><span>|</span>
            <a href="www.duokan.com" target="_blank">多看</a><span>|</span>
            <a href="https://xiaomi.tmall.com" target="_blank">小米天猫店</a><span>|</span>
            <a href="https://miwifi.com" target="_bhome.mi.com/index.htmllank">路由器</a>
        </div>
        <div class="copyright">京ICP证110507号 京ICP备10046444号 <span class="domain">京公网安备11010802020134号</span> 京网文[2020]0276-042号</div>
    </div>
</template>

<script>
    export default{
        name: 'nav-footer'
    }
</script>

<style lang="scss">
@import "./../assets/scss/config.scss";
    .footer{
        height: 234px;
        bOrder-top: 4px solid $colorA;
        text-align: center;
        background-color: $colorB;
        color: $colorD;
        font-size: $fontI;
        .footer-logo {
            margin-top: 46px;
            margin-bottom: 31px;
            img {
                width: 53px;
                height: 36px;
                margin-bottom: 13px;
            }
        }
        .footer-link {
            // display: flex;
            // justify-content: center;
            a{
                color: $colorD;
            }
            span {
                display: inline-block;
                margin: 0 10px;
            }
            margin-bottom: 10px;
        }
        .copyright {
            .domain {
                color: $colorA;
            }
        }
    }
</style>