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

import noActiveOrder from "./noActiveOrder/index.vue"
import activeOrder from "./activeOrder/index.vue"
import bankManage from "./bankManage/index.vue"
import netManage from "./netManage/index.vue"
import recommendManage from "./recommendManage/index.vue"
import houseKeeper from "./houseKeeper/index.vue"

import naoEdit from "./noActiveOrder/edit.vue"
import aoEdit from "./activeOrder/edit.vue"
import bankEdit from "./bankManage/edit.vue"
import hkEdit from "./houseKeeper/edit.vue"
import nmEdit from "./netManage/edit.vue"
import rmEdit from "./recommendManage/edit.vue"


// var container = require('components/container/container.vue');
// import Vue from 'vue';
// var container = {template:'<div>sss</div>'};

export default {
  components: {
    container: container,
    left: left,
    leftDown: leftDown,
    leftUp: leftUp,

    noActiveOrder: noActiveOrder,
    activeOrder: activeOrder,
    bankManage: bankManage,
    netManage: netManage,
    recommendManage: recommendManage,
    houseKeeper: houseKeeper,

    naoEdit: naoEdit,
    aoEdit: aoEdit,
    bankEdit: bankEdit,
    hkEdit: hkEdit,
    nmEdit: nmEdit,
    rmEdit: rmEdit,

  },
  data () {
    return {
      currentView: 'noActiveOrder',
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
