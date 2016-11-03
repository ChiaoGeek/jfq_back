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
import constructionOrder from "./constructionOrder/index.vue"
import companyManage from "./companyManage/index.vue"
import headmanOrder from "./headmanOrder/index.vue"
import engineeringHouseKeeperManage from "./engineeringHouseKeeperManage/index.vue"
import titleManage from "./titleManage/index.vue"

import boEdit from "./bookedOrder/edit.vue"
import coEdit from "./constructionOrder/edit.vue"
import cmEdit from "./companyManage/edit.vue"
import hoEdit from "./headmanOrder/edit.vue"
import ehkmEdit from "./engineeringHouseKeeperManage/edit.vue"
import tmEdit from "./titleManage/edit.vue"


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
    constructionOrder: constructionOrder,
    companyManage: companyManage,
    headmanOrder: headmanOrder,
    engineeringHouseKeeperManage: engineeringHouseKeeperManage,
    titleManage: titleManage,

    boEdit: boEdit,
    coEdit: coEdit,
    cmEdit: cmEdit,
    hoEdit: hoEdit,
    ehkmEdit: ehkmEdit,
    tmEdit: tmEdit,

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
