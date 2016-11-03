<template lang="html">
  <div id="left-down">
          <div id="blank-ul"></div>
          <ul id="left-down-ul">
            <li class="ldu-li">
              <a href="#" class="ldul-a" :class="{active: activeName == 'noActiveOrder'}" @click="changStyle('noActiveOrder', $event)">待激活订单</a>
            </li>
            <li class="ldu-li">
              <a href="#" class="ldul-a" :class="{active: activeName == 'activeOrder'}" @click="changStyle('activeOrder', $event)">激活订单</a>
            </li>
            <li class="ldu-li">
              <a href="#" class="ldul-a" :class="{active: activeName == 'bankManage'}" @click="changStyle('bankManage', $event)">银行管理</a>
            </li>
            <li class="ldu-li">
              <a href="#" class="ldul-a" :class="{active: activeName == 'netManage'}" @click="changStyle('netManage', $event)">网点管理</a>
            </li>
            <li class="ldu-li">
              <a href="#" class="ldul-a" :class="{active: activeName == 'recommendManage'}" @click="changStyle('recommendManage', $event)">推荐人管理</a>
            </li>
            <li class="ldu-li">
              <a href="#" class="ldul-a" :class="{active: activeName == 'houseKeeper'}" @click="changStyle('houseKeeper', $event)">管家管理</a>
            </li>
          </ul>
        </div>
</template>

<script>
export default {
  name: 'left',
  data () {
    return {
       activeName: 'noActiveOrder'
      }
  },
  computed: {},
  mounted () {},
  methods: {
    changStyle: function(sortment = 'noActiveOrder', event){
       this.activeName = sortment;
       //给目前的实例注册一个事件
       this.$emit('onChangeTemplate', sortment);

    }
  }
}
</script>

<style lang="css">
#left-down{
  /*height: 100%;*/
  width: 150px;
  background-color: #E5E9F2;
  /*overflow: hidden;*/
}
#blank-ul{
  width: 150px;
  height: 1px;
}
#left-down-ul{
  padding: 0px;
  text-align: center;
  margin: auto;
  width: 120px;
}
.ldu-li{
  list-style: none;
  text-align: center;

}
.ldul-a{
  display: block;
  width: 120px;
  height: 25px;
  color: #999999;
  text-decoration: none;
  line-height: 25px;
  margin-top: 26px;
  font-size: 14px;
}
.ldul-a:hover{
  display: block;
  background-color: rgb(98, 144, 192);
  border-radius: 12.5px;	/* relative value */
  -moz-border-radius: 12.5px;
  -webkit-border-radius: 12.5px;
  color: #fff;
}
.active{
  display: block;
  background-color: rgb(98, 144, 192);
  border-radius: 12.5px;	/* relative value */
  -moz-border-radius: 12.5px;
  -webkit-border-radius: 12.5px;
  color: #fff;
}

</style>
