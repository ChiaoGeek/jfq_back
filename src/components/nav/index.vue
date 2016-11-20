<template lang="html">
  <div class="nav">
    <router-link class="router-a" to="/investment/index">招商部</router-link>
    <router-link class="router-a" to="/market/index">市场部</router-link>
    <router-link class="router-a" to="/engineering/index">工程部</router-link>
    <router-link class="router-a" to="/finance/index">财务部</router-link>
  </div>
</template>

<script>
export default {
  name: 'navigation',
  data () {
    return {}
  },
  computed: {},
  mounted () {},
  methods: {},
  components: {}
}
</script>

<style scoped lang="css">
.nav{
  position: absolute;
  left: 40%;
  top: 10px;
}
.router-a{
  text-decoration: none;
  color: #393939;
}
</style>
