<template>
  <div><router-view></router-view>
  <van-tabbar v-model="active" active-color="#ee0a24" inactive-color="#000">
    <van-tabbar-item  replace to="/home"  icon="location-o">首页</van-tabbar-item>
    <van-tabbar-item  replace to="/classify"  icon="list-switch">分类</van-tabbar-item>
    <van-tabbar-item  replace to="/cart" icon="shopping-cart-o">购物车</van-tabbar-item>
    <van-tabbar-item  replace to="/user" icon="user-o">我的</van-tabbar-item>
  </van-tabbar>
  </div>

</template>

<script>
export default {
  name: 'layoutIndex',
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style>

</style>
