<template lang="html">
   <container>
     <left>
       <left-up></left-up>
       <left-down @onChangeTemplate="selectATemplate" ></left-down>
     </left>

     <sp-component v-bind:is="currentView" @jumpEdit="updateInfo" @cancelEdit="cancel" v-bind:itemPara="itemPara"></sp-component>
   </container>

</template>

<script>
import container from "components/container/container.vue"
import left from "components/left/left.vue"
import leftDown from "./left-down/left-down.vue"
import leftUp from "components/left-up/left-up.vue"

import bookedOrder from "./bookedOrder/index.vue"
import materialOrder from "./materialOrder/index.vue"
import refundOrder from "./refundOrder/index.vue"
import brandTypeManage from "./brandTypeManage/index.vue"
import brandManage from "./brandManage/index.vue"
import agentManage from "./agentManage/index.vue"
import serviceManage from "./serviceManage/index.vue"
import buildingMaterialManage from "./buildingMaterialManage/index.vue"
import storeManage from "./storeManage/index.vue"
import shoppingGuideManage from "./shoppingGuideManage/index.vue"

import boEdit from "./bookedOrder/edit.vue"
import moEdit from "./materialOrder/edit.vue"
import roEdit from "./refundOrder/edit.vue"
import btmEdit from "./brandTypeManage/edit.vue"
import bmEdit from "./brandManage/edit.vue"
import amEdit from "./agentManage/edit.vue"
import smEdit from "./serviceManage/edit.vue"
import bmmEdit from "./buildingMaterialManage/edit.vue"
import storemEdit from "./storeManage/edit.vue"
import sgmEdit from "./shoppingGuideManage/edit.vue"


// var container = require('components/container/container.vue');
// import Vue from 'vue';
// var container = {template:'<div>sss</div>'};

export default {
  components: {
    container: container,
    left: left,
    leftDown: leftDown,
    leftUp: leftUp,

    bookedOrder: bookedOrder,
    materialOrder: materialOrder,
    refundOrder: refundOrder,
    brandTypeManage: brandTypeManage,
    brandManage: brandManage,
    agentManage: agentManage,
    serviceManage: serviceManage,
    buildingMaterialManage: buildingMaterialManage,
    storeManage: storeManage,
    shoppingGuideManage: shoppingGuideManage,


    boEdit:boEdit,
    moEdit:moEdit,
    roEdit:roEdit,
    btmEdit:btmEdit,
    bmEdit:bmEdit,
    amEdit:amEdit,
    smEdit:smEdit,
    bmmEdit:bmmEdit,
    storemEdit:storemEdit,
    sgmEdit:sgmEdit,

  },
  data () {
    return {
      currentView: 'bookedOrder',
      itemPara: '',

    }
  },
  computed: {},
  mounted () {},
  methods: {
    selectATemplate: function(arg){
      this.currentView = arg;
    },
    updateInfo: function(arg){
      this.itemPara = arg.id;
      this.currentView = arg.viewName;
    },
    cancel: function(arg){ //取消编辑
      this.currentView = arg.componentName;
    }
  }
}
</script>

<style lang="css">
/*RESET v3*/
html {
  padding: 0px;
  margin: 0px;
  /*height:100%;*/
  width: 100%;
}
body{
  padding: 0px;
  margin: 0px;
  /*height:100%;*/
  width: 100%;
  /*overflow:hidden;*/
}

</style>
