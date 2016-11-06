<template>
  <div id="app">
    <p>
    <!-- 使用 router-link 组件来导航. -->
    <!-- 通过传入 `to` 属性指定链接. -->
    <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
    <router-link to="/investment/index">招商部</router-link>
    <router-link to="/market/index">市场部</router-link>
    <router-link to="/engineering/index">工程部</router-link>
    <router-link to="/finance/index">财务部</router-link>
    <!-- <router-link to="/bar">Go to Bar</router-link> -->
  </p>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>
<script>
  import router from './routers'
  export default {
    data(){
      return{
        seen: 'true'
      }
    },
    mounted(){

        // router.push({ name: 'marketIndex'});
    }
  }
</script>
<style lang="css">
#app{
  width: 100%;
  height: 100%;
  margin: auto;
}
</style>
