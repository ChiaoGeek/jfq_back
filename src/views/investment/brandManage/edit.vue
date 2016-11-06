<template lang="html">
  <right >
    <div id="right-up">
        <div id="right-up-blank"></div>
        <div id="right-up-text">
          {{listRes.name}}
        </div>
        <div id="right-up-icon">
          <span class="rui-icon-text" @click='save()'>
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

          <span class="rui-icon-text" @click='cancel("noActiveOrder", $event)'>
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
             <span class="label">品牌</span>
             <span class="input">
               <input type="text" class="inputtext" name="name" v-model="listRes.name" :style="{width: '180px', height: '40px'}">
             </span>
          </div>
          <div class="middle">
             <span class="label">品牌类型</span>
             <span class="input">
               <!-- <input type="text" class="inputtext" name="name" v-model="listRes.name" :style="{width: '180px', height: '40px'}"> -->
             </span>
          </div>

       </div>

       <div class="textarea">
          <div class="textarea-left">
             <span class="textarea-label">描述</span>
             <span class="textarea-input">
               <!-- <input type="text" class="inputtext" name="name" v-model="listRes.intro" :style="{width: '180px', height: '40px'}"> -->
               <textarea  v-model="listRes.intro" :style="{width: '670px', height: '180px'}" class="textarea-inputtext">

               </textarea>
             </span>
          </div>

       </div>

       <div class="upload-img">
           <span class="label">图片上传</span>
           <span class="input">
             <!-- <a href="javascript:;" class="a-upload"> -->
              <input type="file" class="inputfile" name="" v-on:change="getImageValue" :style="{width: '180px', height: '40px'}">
             <!-- </a> -->
             <input class="button" type="button" name="name" value="图片上传" @click="upload">
           </span>
       </div>

       <div class="img-display">
             <img :src="isBase64 ? logoImg :imgUrlBase+logoImg" />
       </div>

    </div>
  </right>
</template>

<script>
import right from "components/right/right.vue";
import commonJs from "src/common.js";export default {
  name: 'bmEdit',
  data () {
    return {
      listRes: {}, //服务器端查询的数据

      //需要显示
      // name: '',
      logoImg: '',
      logoImgInsert: '',

      //图片配置
      imgUrlBase: '',

      uploadImgObject: '',
      isBase64: false,


    }
  },
  props: ['itemPara'],
  computed: {},
  mounted () {
    //服务器基本地址
    var urlbase = this.$http.options.root;
    this.imgUrlBase = this.$http.options.imgRoot;
    //请求的URL
    var resUrl = urlbase+'/merchant/api/brands/'+this.itemPara;

    this.$http.get(resUrl).then(
      (response)=>{
        //查询出服务器的数据
        this.listRes = response.body.data;
        this.logoImg = this.listRes.logoImg;
        //this.selected = this.listRes.available;


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
    },
    save: function(){
      var urlbase = this.$http.options.root;
      var resUrl = urlbase+'/merchant/api/brands/';
      this.$http.put(resUrl, this.listRes).then(
        (response)=>{
          //查询出服务器的数据
           commonJs.savaSuccess('数据保存成功！！！');

        },
        (err)=>{
          console.log(err);
        }
      );
    },
    //获取图片内容
    getImageValue: function(e){
       var file = e.target.files[0];
       this.uploadImgObject = file;
    },
    upload: function(){
      var that = this;
      var updateObject = that.listRes;
      commonJs.getBase64Image(that.uploadImgObject).onload = function (e) {
          var urlbase = that.$http.options.root;
          var resUrl = urlbase+'/merchant/api/brands/';

          updateObject.logoImgInsert = [this.result];
          // alert(updateObject.showImgInsert);
          updateObject.logoImg = '';

          console.log(this.result);


          //控制图片显示
          that.isBase64 = true;
          that.logoImg = this.result;

          that.$http.put(resUrl, updateObject).then(
            (response)=>{
              //查询出服务器的数据
               commonJs.savaSuccess('图片上传成功！！！');

            },
            (err)=>{
              console.log(err);
            }
          );
      }
    }


  },
  components:{
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



/*
新增样式
*/

.upload-img{
  width: 96%;
  margin: auto;
  height: 41px;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 2px solid rgb(216, 216, 216);
}

.img-display{
  width: 100%;
  margin: auto;
  margin-top: 20px;

  min-height: 300px;
  height: auto;

}
.img-display img{
  float: left;
  /*margin-left: 10px;*/
}
.button{
   width: 80px;
   height: 30px;
   background-color: rgb(86, 142, 194);
   border: 0px;
   font-size: 14px;
   color: #fff;
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

.textarea{
  width: 96%;
  margin: auto;
  height: 180px;
  margin-top: 20px;
}
.textarea-left{
  width: 100%;
  float: left;
}
.textarea-label{
  color: #393939;
  font-size: 16px;
  font-family: PingFangSC-Regular;
  letter-spacing: 1px;
  display: block;
  float: left;
  width: 105px;
  line-height: 180px;
  text-align: right;
}
.textarea-input{
  float: left;
  display: block;
  margin-left: 10px;
}
.textarea-inputtext{
  border: 1px solid rgb(86, 142, 194);


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
