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

import decorationOrder from "./decorationOrder/index.vue"
import materialOrder from "./materialOrder/index.vue"
import refundOrder from "./refundOrder/index.vue"
import wechatCash from "./wechatCash/index.vue"
import bankCash from "./bankCash/index.vue"


import doEdit from "./decorationOrder/edit.vue"
import moEdit from "./materialOrder/edit.vue"
import roEdit from "./refundOrder/edit.vue"
import wcEdit from "./wechatCash/edit.vue"
import  bcEdit from "./bankCash/edit.vue"



// var container = require('components/container/container.vue');
// import Vue from 'vue';
// var container = {template:'<div>sss</div>'};

export default {
  components: {
    container: container,
    left: left,
    leftDown: leftDown,
    leftUp: leftUp,

    decorationOrder: decorationOrder,
    materialOrder: materialOrder,
    refundOrder: refundOrder,
    wechatCash: wechatCash,
    bankCash: bankCash,


    doEdit: doEdit,
    moEdit: moEdit,
    roEdit: roEdit,
    wcEdit: wcEdit,
    bcEdit: bcEdit,

  },
  data () {
    return {
      currentView: 'decorationOrder',
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
