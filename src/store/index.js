/**
 *  在main.js中加载
 */

import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
Vue.use(Vuex);


// 定义一个去管理我们的状态
const state = {
    username: '', // 登录用户名
    cartCount: 0, // 购物车商品数量
};

export default new Vuex.Store({
    state,
    mutations,
    actions
});