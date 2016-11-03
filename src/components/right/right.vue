<template lang="html">
   <div id="right">
    <slot></slot>
   </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {},
  mounted () {},
  methods: {
    updateInfo: function(arg){
      alert(1);
    }
  }
}
</script>

<style scoped lang="css">
#right{
  /*height: 100%;*/
  margin-left: 150px;
  min-height: 820px;
  background-color: rgb(248, 241, 237);
}
</style>
