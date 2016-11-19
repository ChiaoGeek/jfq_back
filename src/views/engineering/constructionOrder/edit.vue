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

          <span class="rui-icon-text" @click='cancel("constructionOrder", $event)'>
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
             <span class="label">姓名</span>
             <span class="input">
               <input type="text" class="inputtext" name="name" v-model="appt.customerName" :style="{width: '180px', height: '40px'}">
             </span>
          </div>
          <div class="right">
             <span class="label">房屋地址</span>
             <span class="input">
               <input type="text" class="inputtext" name="name" v-model="appt.orderAddress" :style="{width: '180px', height: '40px'}">
             </span>
          </div>
          <div class="middle">
            <span class="label">电话</span>
            <span class="input">
              <input type="text" class="inputtext" name="name" v-model="appt.customerMobile" :style="{width: '180px', height: '40px'}">
            </span>
          </div>
       </div>

       <div class="person-info margin-top">
          <div class="left">
             <span class="label">工长姓名</span>
             <span class="input">
               <input type="text" class="inputtext" name="name" v-model="foreman.nickname" :style="{width: '180px', height: '40px'}">
             </span>
          </div>
          <div class="right">
             <span class="label">管家</span>
             <span class="input">
               <input type="text" class="inputtext" name="name" v-model="manager.nickname" :style="{width: '180px', height: '40px'}">
             </span>
          </div>
          <div class="middle">
            <span class="label">工长电话</span>
            <span class="input">
              <input type="text" class="inputtext" name="name" v-model="foreman.mobile" :style="{width: '180px', height: '40px'}">
            </span>
          </div>
       </div>

       <div class="person-info margin-top">
          <div class="left">
             <span class="label">工程管家</span>
             <span class="input">
               <input type="text" class="inputtext" name="name" v-model="projectManager.nickname" :style="{width: '180px', height: '40px'}">
             </span>
         </div>
          <div class="right">
             <span class="label">订单金额</span>
             <span class="input">
               <input type="text" class="inputtext" name="name" v-model="plan.price" :style="{width: '180px', height: '40px'}">
             </span>
          </div>
          <div class="middle">
            <span class="label">订单创建时间</span>
            <span class="input">
              <input type="text" class="inputtext" name="name" v-model="order.createdAt" :style="{width: '180px', height: '40px'}">
            </span>
          </div>
       </div>

       <div class="person-info margin-top">
          <div class="left">
             <span class="label">方案说明</span>
             <span class="input">
               <input type="text" class="inputtext" name="name" v-model="plan.description" :style="{width: '180px', height: '40px'}">
             </span>
          </div>


       </div>


    </div>
  </right>
</template>

<script>
import right from "components/right/right.vue";
// import inputCom from "components/input/input.vue";
import commonJs from "src/common.js";
export default {
  name: 'coEdit',
  data() {
    return {
      plan: {},
      appt: {}, //服务器端查询的数据
      order: {},
      manager: {},
      projectManager: {},
      foreman: {}
    }
  },
  props: ['itemPara'],
  computed: {},
  mounted() {
    let that = this;
    //服务器基本地址
    var urlbase = this.$http.options.root;
    //请求的URL
    var resUrl = urlbase + '/decorationorder/api/admin/decorationOrders/' + this.itemPara;
    this.$http.get(resUrl).then(
      (response) => {
        //查询出服务器的数据
        that.order = response.body.data;
        that.$http.get(urlbase + "/decorationorder/api/admin/decorationAppts/" + that.order.id).then(
          (response) => {
            that.appt = response.body.data;
          },
          (err) => {
            console.log(err);
          }
        );
        that.$http.get(urlbase + "/decorationorder/api/admin/decorationPlans/" + that.order.planId).then(
          (response) => {
            that.plan = response.body.data;
          },
          (err) => {
            console.log(err);
          }
        );
        // 管家
        that.$http.get(urlbase + "/user/api/admin/managerProfiles/" + that.order.managerId).then(
          (response) => {
            that.manager = response.body.data;
          },
          (err) => {
            console.log(err);
          }
        );
        // 工程管家
        that.$http.get(urlbase + "/user/api/admin/projectManagerProfiles/" + that.order.projectManagerId).then(
          (response) => {
            that.projectManager = response.body.data;
          },
          (err) => {
            console.log(err);
          }
        );
        // 工长
        that.$http.get(urlbase + "/user/api/admin/workmanProfiles/" + that.order.foremanId).then(
          (response) => {
            that.foreman = response.body.data;
          },
          (err) => {
            console.log(err);
          }
        );
      },
      (err) => {
        console.log(err);
      }
    );
  },
  methods: {
    cancel: function(componentName, event) {

      var obj = {
        componentName: componentName
      };
      this.$emit('cancelEdit', obj);
    }
  },
  components: {
    right,
    // inputCom
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
