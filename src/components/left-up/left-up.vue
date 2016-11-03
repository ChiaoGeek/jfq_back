<template lang="html">
  <div id="left-up">
          <div id="blank"></div>
          <div id="left-up-img">
            <img src="./img/photo.jpg" alt="" />
          </div>

          <div id="left-up-name">
            用户姓名
          </div>
          <div id="logout">
            <img src="./img/power.png" alt="" />
          </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {},
  mounted () {},
  methods: {}
}
</script>

<style lang="css">
#left-up{
  height: 180px;
  width: 150px;
  background-color: rgb(98, 144, 192);
}
#blank{
  width: 180px;
  height: 39px;
}
#left-up-img{
  width: 60px;
  height: 60px;
  margin: auto;
}
#left-up-img img{
  line-height: 0;	/* remove line-height */
  display: inline-block;	/* circle wraps image */
  border-radius: 50%;	/* relative value */
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  transition: linear 0.25s;
}
#left-up-name{
  text-align: center;
  margin: auto;
  margin-top: 10px;
  font-size: 14px;
  color: #fff;
  height: 21px;
}
#logout{
  margin: auto;
  margin-top: 29px;
  height: 14px;
  text-align: center;

}
#logout img{
  height: 14px;
  width: 14px;
}
</style>
