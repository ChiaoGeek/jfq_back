<template lang="html">
  <right >
    <div id="right-up">
        <div id="right-up-blank"></div>
        <div id="right-up-text">
          {{itemPara}}
        </div>
        <div id="right-up-icon">
          <span class="rui-icon-text">
            <a href="#" class="rui-icon">
              <img src="../../../../static/img/save.png" alt="" />
            </a>
            <span class="rui-text">
              <a href="#" class="rui-text-a">
                保存
              </a>
            </span>
            <span class="span-blank"></span>
          </span>

          <span class="rui-icon-text" @click='cancel("bookedOrder", $event)'>
            <a href="#" class="rui-icon">
              <img src="../../../../static/img/cancel.png" alt="" />
            </a>
            <span class="rui-text">
              <a href="#" class="rui-text-a"  >
                取消
              </a>
            </span>
            <span class="span-blank"></span>
          </span>

        </div>
      </div>



    <div id="right-table">
       <!-- <inputCom inputName='applyName'   inputWidth="120px" inputHeight="40px" ></inputCom> -->
       <div class="person-info">
          <div class="left">
             <span class="label">姓名</span> <span class="input"><inputCom inputName='applyName'   inputWidth="180px" inputHeight="40px" ></inputCom><span>
          </div>
          <div class="right">
             <span class="label">管家</span>
             <span class="input">
               <inputCom inputName='applyName'   inputWidth="180px" inputHeight="40px" ></inputCom>
             <span>
          </div>
          <div class="middle">
            <span class="label">电话</span>
            <span class="input">
              <inputCom inputName='applyName'   inputWidth="180px" inputHeight="40px" ></inputCom>
            <span>
          </div>
       </div>

       <div class="person-info margin-top">
          <div class="left">
             <span class="label">门店预约品牌</span> <span class="input"><inputCom inputName='applyName'   inputWidth="180px" inputHeight="40px" ></inputCom><span>
          </div>
          <div class="right">
             <span class="label">管家</span>
             <span class="input">
               <inputCom inputName='applyName'   inputWidth="180px" inputHeight="40px" ></inputCom>
             <span>
          </div>
          <div class="middle">
            <span class="label">预约时间</span>
            <span class="input">
              <inputCom inputName='applyName'   inputWidth="180px" inputHeight="40px" ></inputCom>
            <span>
          </div>
       </div>

       <div class="person-info margin-top">
          <div class="left">
             <span class="label">业务经理</span> <span class="input"><inputCom inputName='applyName'   inputWidth="180px" inputHeight="40px" ></inputCom><span>
          </div>

          <div class="middle">
            <span class="label">订单创建时间</span>
            <span class="input">
              <inputCom inputName='applyName'   inputWidth="180px" inputHeight="40px" ></inputCom>
            <span>
          </div>
       </div>



    </div>
  </right>
</template>

<script>
import right from "components/right/right.vue";
import inputCom from "components/input/input.vue";
export default {
  name: 'moEdit',
  data () {
    return {}
  },
  props: ['itemPara'],
  computed: {},
  mounted () {},
  methods: {
    cancel: function(componentName, event){

       var obj = {componentName:componentName};
       this.$emit('cancelEdit', obj);
    }
  },
  components:{
    right,
    inputCom
  }
}
</script>

<style scoped lang="css">

#right-up{
  width: 100%;
  height: 40px;
  background-color: #fff;

}
#right-up-blank{
  /*width: 13px;
  height: 40px;
  float: left;*/
}
#right-up-icon{
  height: 40px;
  float: right;
  margin-right: 40px;
}
#right-up-text{
  position: absolute;
  left: 170px;
  top: 10px;
  color: #393939;
  font-size: 16px;
  font-family: PingFangSC-Regular;
}
.rui-icon-text{
  display: block;
  margin-left: 15px;
  width: 25px;
  margin-top: 3px;
  float: left;
}
.rui-icon{
  display: block;
  text-align: center;
  margin: auto;
  text-decoration: none;
  width: 20px;
  height: 20px;
  overflow: hidden;

}
.rui-icon img{
  border: 0px;
  width: 20px;
  height: 20px;
  overflow: hidden;
}
.rui-text{
  width: 25px;
  height: 15px;
  overflow: hidden;
  display: block;
  text-align: center;
  margin-bottom: 1px;

}
.rui-text-a{
  font-size: 12px;
  color: #000;
  text-decoration: none;
  text-align: center;
  }
.span-blank{
  display: block;
  width: 25px;
  height: 1px;

}
#right-table{
  /*height: 500px;*/
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 20px;
  padding-top: 20px;
  min-height: 750px;
  background-color: #fff;
  box-shadow: -1px 3px 8px rgb(188, 183, 180);

}
.person-info{
  width: 96%;
  margin: auto;
  height: 41px;
}
.margin-top{
  margin-top: 30px;
}
.label{
  color: #393939;
  font-size: 16px;
  font-family: PingFangSC-Regular;
  letter-spacing: 1px;
  display: block;
  float: left;
  width: 105px;
  line-height: 40px;
  text-align: right;
}
.input{
  float: left;
  display: block;
  margin-left: 10px;
}
.select{
  width: 180px;
  height: 40px;
  color: #393939;
  font-size: 14px;
  line-height: 40px;
  text-align: center;
  font-family: PingFangSC-Regular;
  border-radius: 4.5px;	/* relative value */
  -moz-border-radius: 4.5px;
  -webkit-border-radius: 4.5px;
  border: 1px solid #5E90C0;
  background-color: #fff;
}
.left{
  width: 30%;
  float: left;
  }
.right{
  width: 30%;
  float: right;
  }
.middle{
    width: 30%;

    margin-left: 35%;


}

</style>
