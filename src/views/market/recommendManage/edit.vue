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

          <span class="rui-icon-text" @click='cancel("recommendManage", $event)'>
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
        <navigation></navigation>

      </div>



    <div id="right-table">
       <!-- <inputCom inputName='applyName'   inputWidth="120px" inputHeight="40px" ></inputCom> -->
       <div class="person-info">
          <div class="left">
             <span class="label">姓名</span>
             <span class="input">
               <input type="text" class="inputtext" name="name" v-model="listRes.fullname" :style="{width: '180px', height: '40px'}">
             </span>
          </div>
          <div class="right">
             <span class="label">银行</span>
             <span class="input">
               <input type="text" class="inputtext" name="name" v-model="listRes.bankBranch.bank.name" :style="{width: '180px', height: '40px'}">
             </span>
          </div>
          <div class="middle">
            <span class="label">电话</span>
            <span class="input">
              <input type="text" class="inputtext" name="name" v-model="listRes.mobile" :style="{width: '180px', height: '40px'}">
            </span>
          </div>
       </div>

       <div class="person-info margin-top">
          <div class="left">
             <span class="label">分行</span>
             <span class="input">
               <input type="text" class="inputtext" name="name" v-model="listRes.bankBranch.name" :style="{width: '180px', height: '40px'}">
             </span>
          </div>
          <div class="right">
             <span class="label">网点</span>
             <span class="input">
               <input type="text" class="inputtext" name="name" v-model="listRes.bankBranch.subbranchName" :style="{width: '180px', height: '40px'}">
             </span>
          </div>
          <div class="middle">
            <span class="label">支行</span>
            <span class="input">
              <input type="text" class="inputtext" name="name" v-model="listRes.bankBranch.branchName" :style="{width: '180px', height: '40px'}">
            </span>
          </div>
       </div>

       <div class="person-info margin-top">
          <div class="left">
             <span class="label">推荐码</span>
             <span class="input">
               <input type="text" class="inputtext" name="name" v-model="listRes.referralCode" :style="{width: '180px', height: '40px'}">
             </span>
          </div>
       </div>

    </div>
  </right>
</template>

<script>
import right from "components/right/right.vue";
import navigation from "components/nav/index.vue";

export default {
  name: 'rmEdit',
  data () {
    return {
      listRes: {
        bankBranch: {
          bank: {}
        }
      },
    }
  },
  props: ['itemPara'],
  computed: {},
  mounted () {
    //服务器基本地址
    var urlbase = this.$http.options.root;
    this.imgUrlBase = this.$http.options.imgRoot;
    //请求的URL
    var resUrl = urlbase+'/loanapplicant/api/referrals/'+this.itemPara;

    this.$http.get(resUrl).then(
      (response)=>{
        //查询出服务器的数据
        this.listRes = response.body.data;



      },
      (err)=>{
        console.log(err);
      }
    );
  },
  methods: {
    cancel: function(componentName, event){

       var obj = {componentName:componentName};
       this.$emit('cancelEdit', obj);
    }
  },
  components:{
    right,
    navigation

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
.inputtext{
  border: 1px solid rgb(86, 142, 194);
  width: 150px;
  height: 40px;
  color: #393939;
  font-size: 18px;
  line-height: 40px;
  text-align: left;
  font-family: PingFangSC-Regular;
  border-radius: 4.5px;	/* relative value */
  -moz-border-radius: 4.5px;
  -webkit-border-radius: 4.5px;
}
</style>
