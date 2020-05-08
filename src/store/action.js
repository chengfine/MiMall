/*
    商城 Vuex-actions
*/
export default {
    // Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，因此你可以调用 context.commit 提交一个 mutation
    saveUserName(context, username) {
        context.commit('saveUserName', username)  
    },
    saveCartCount(context, count) {
        context.commit('saveCartCount', count)
    }
}