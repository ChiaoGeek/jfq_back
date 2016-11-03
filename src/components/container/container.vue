<template lang="html">
  <div class="container">
    <slot></slot>
    <div style="clear:both"></div>
  </div>
</template>

<script>
export default {
  name: "container",
  data () {
    return {}
  },
  computed: {},
  mounted () {},
  methods: {}
}
</script>

<style lang="css">
.container{
  width: 100%;
  /*height:100%;*/
  background-color: #E5E9F2;
  margin: auto;
}
</style>
