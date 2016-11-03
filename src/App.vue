<template>
  <div id="app">
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

        //router.push({ name: 'marketIndex'});
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
