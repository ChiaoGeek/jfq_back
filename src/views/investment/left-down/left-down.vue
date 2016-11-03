<template lang="html">
  <div id="left-down">
          <div id="blank-ul"></div>
          <ul id="left-down-ul">
            <li class="ldu-li">
              <a href="#" class="ldul-a" :class="{active: activeName == 'bookedOrder'}" @click="changStyle('bookedOrder', $event)">已预约订单</a>
            </li>
            <li class="ldu-li">
              <a href="#" class="ldul-a" :class="{active: activeName == 'materialOrder'}" @click="changStyle('materialOrder', $event)">主材订单</a>
            </li>
            <li class="ldu-li">
              <a href="#" class="ldul-a" :class="{active: activeName == 'refundOrder'}" @click="changStyle('refundOrder', $event)">退款订单</a>
            </li>
            <li class="ldu-li">
              <a href="#" class="ldul-a" :class="{active: activeName == 'brandTypeManage'}" @click="changStyle('brandTypeManage', $event)">品牌类型管理</a>
            </li>
            <li class="ldu-li">
              <a href="#" class="ldul-a" :class="{active: activeName == 'brandManage'}" @click="changStyle('brandManage', $event)">品牌管理</a>
            </li>
            <li class="ldu-li">
              <a href="#" class="ldul-a" :class="{active: activeName == 'agentManage'}" @click="changStyle('agentManage', $event)">代理商管理</a>
            </li>
            <li class="ldu-li">
              <a href="#" class="ldul-a" :class="{active: activeName == 'serviceManage'}" @click="changStyle('serviceManage', $event)">业务经理管理</a>
            </li>
            <li class="ldu-li">
              <a href="#" class="ldul-a" :class="{active: activeName == 'buildingMaterialManage'}" @click="changStyle('buildingMaterialManage', $event)">建材城管理</a>
            </li>
            <li class="ldu-li">
              <a href="#" class="ldul-a" :class="{active: activeName == 'storeManage'}" @click="changStyle('storeManage', $event)">门店管理</a>
            </li>
            <li class="ldu-li">
              <a href="#" class="ldul-a" :class="{active: activeName == 'shoppingGuideManage'}" @click="changStyle('shoppingGuideManage', $event)">导购管理</a>
            </li>
          </ul>
        </div>
</template>

<script>
export default {
  name: 'left',
  data () {
    return {
       activeName: 'bookedOrder'
      }
  },
  computed: {},
  mounted () {},
  methods: {
    changStyle: function(sortment = 'bookedOrder', event){
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
