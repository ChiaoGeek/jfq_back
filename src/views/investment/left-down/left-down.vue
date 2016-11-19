<template lang="html">
  <div id="left-down">
          <div id="blank-ul"></div>
          <ul id="left-down-ul">
            <li class="ldu-li">
              <a href="#" class="ldul-a" :class="{active: activeName == 'bookedOrder'}" @click="changStyle('bookedOrder', $event)" >订单管理</a>
              <ul class="down-ul" v-show="ulIfShow">
                <li class="down-li"><a href="#" class="down-a">已预约</li>
                <li class="down-li"><a href="#" class="down-a">继续支付</li>
                <li class="down-li"><a href="#" class="down-a">待支付</li>
                <li class="down-li"><a href="#" class="down-a">待确认</li>
                <li class="down-li"><a href="#" class="down-a">待收货</li>
                <li class="down-li"><a href="#" class="down-a">已完成</li>
              </ul>
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
       activeName: 'bookedOrder',
       ulIfShow: false
      }
  },
  computed: {},
  mounted () {},
  methods: {
    changStyle: function(sortment = 'bookedOrder', event){
       this.activeName = sortment;
       console.log(this.ulIfShow);
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
.down-ul{
  padding: 0px;
  text-align: center;
  margin: auto;
  width: 120px;
}
.down-li{
  list-style: none;
  text-align: center;
}
.down-a{
  display: block;
  width: 120px;
  height: 15px;
  color: #999999;
  text-decoration: none;
  line-height: 15px;
  margin-top: 2px;
  font-size: 12px;
}
.down-a:hover{
  display: block;
  background-color: rgb(98, 144, 192);
  border-radius: 12.5px;	/* relative value */
  -moz-border-radius: 12.5px;
  -webkit-border-radius: 12.5px;
  color: #fff;
}
</style>
