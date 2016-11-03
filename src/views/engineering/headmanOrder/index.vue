<template lang="html">
    <right>
      <div id="right-up">
          <div id="right-up-blank"></div>
          <div id="right-up-icon">
            <span class="rui-icon-text">
              <a href="#" class="rui-icon">
                <img src="./img/edit.png" alt="" />
              </a>
              <span class="rui-text">
                <a href="#" class="rui-text-a">
                  编辑
                </a>
              </span>
              <span class="span-blank"></span>
            </span>

            <span class="rui-icon-text">
              <a href="#" class="rui-icon">
                <img src="./img/new.png" alt="" />
              </a>
              <span class="rui-text">
                <a href="#" class="rui-text-a">
                  新建
                </a>
              </span>
              <span class="span-blank"></span>
            </span>

            <span class="rui-icon-text">
              <a href="#" class="rui-icon">
                <img src="./img/import.png" alt="" />
              </a>

              <span class="rui-text">
                <a href="#" class="rui-text-a">
                  导入
                </a>
              </span>
              <span class="span-blank"></span>
            </span>

            <span class="rui-icon-text">
              <a href="#" class="rui-icon">
                <img src="./img/export.png" alt="" />
              </a>
              <span class="rui-text">
                <a href="#" class="rui-text-a">
                  导出
                </a>
              </span>
              <span class="span-blank"></span>
            </span>

          </div>
        </div>

        <div id="right-form">
          <div id="right-form-blank">

          </div>
          <div id="right-form-content">
            <form class="" action="index.html" method="post">
              <input type="text" name="nickname" class="rfc-input" placeholder="姓名" v-model='nickname' @blur="search">
              <input type="text" name="mobile" value="" class="rfc-input" v-model='mobile' placeholder="电话" @blur="search">
              <input type="text" name="nativePlace" value="" class="rfc-input" v-model='nativePlace' placeholder="籍贯" @blur="search">
              <input type="text" name="workType" value="" class="rfc-input" v-model='workType' placeholder="工种" @blur="search">
              <select class="rfc-select" name="available" v-model='available'  @change="search">
                <option  value="true">&nbsp;&nbsp;&nbsp;&nbsp;接单中</option>
                <option  value="false">&nbsp;&nbsp;&nbsp;&nbsp;不接单</option>
              </select>

            </form>
          </div>
          <div id="rfc-search">
              <!-- <img src="./img/search.png" alt="" /> -->
          </div>

      </div>

      <div id="right-table">
        <table >
          <tr>
            <th width="40px">&nbsp;</th>
            <th width="48px">ID</th>
            <th>姓名</th>
            <th>电话</th>
            <th>籍贯</th>
            <th>工龄</th>
            <th>工种</th>
            <th>是否工长</th>
            <th>团队人数</th>
            <th>状态</th>

          </tr>

          <tr v-for="todo in listRes">
            <td @click="edit(todo.userId, $event);" style="cursor:pointer;">编辑</td>
            <td>{{todo.userId}}</td>


            <td>{{todo.nickname}}</td>
            <td>{{todo.mobile}}</td>
            <td>{{todo.nativePlace}}</td>
            <td>{{todo.startTime |calculateWorkTime}}</td>
            <td>{{todo.workType}}</td>
            <td>{{todo.foreman? "是" : "否"}}</td>
            <td>{{todo.teamScale}}</td>
            <td>{{todo.available? "接单中" : "不接单"}}</td>


          </tr>

        </table>
        <div id="page" >
          <v-page :pePageThreshould="5" v-bind:peAllPageNumber="allPageNumber" :peCurrentPage="currentPage"  @changeCurrentPage="ccp"></v-page>
      </div>
      </div>
    </right>
</template>

<script>
import right from "components/right/right.vue";
import vPage from "components/v-page/index.vue";
// import requestUrl from "../../../config.js";
export default {
  name: 'headmanOrder',
  data () {
    return {
      listRes: '', //服务器端查询的数据

      //需要查询的字段
      nickname: '',
      mobile: '',
      nativePlace: '',
      workType: '',
      available: '',

      form: {}, //把搜索的字段封装成数组
      filterString: '',  //把数组变成4字符串

      allPageNumber: null,  //总页数
      currentPage: null,    //当前页面

      perSize: 20,   //每页面显示的数据


    }
  },
  computed: {

  },
  mounted () {

    //服务器基本地址
    var urlbase = this.$http.options.root;
    //请求的URL
    var resUrl = urlbase+'/user/api/admin/workmanProfiles?page=0&size='+this.perSize+'&sort=userId,ASC';

    this.$http.get(resUrl).then(
      (response)=>{
        //查询出服务器的数据
        this.listRes = response.body.data;
        //得到总页数
        this.allPageNumber = response.body.meta.pageCount;
        //获取当前页面 需要加一
        this.currentPage = response.body.meta.currentPage + 1;
        // this.currentPage = 3;
      },
      (err)=>{
        console.log(err);
      }
    );

  },
  methods: {
    edit: function(id, event){
      // this.activeName = sortment;
      //给目前的实例注册一个事件
      //alert(1);
      var obj = {id: id, viewName: 'hoEdit'};
      this.$emit('jumpEdit', obj);
    },
    search: function(){
      this.form['nickname'] = this.nickname;
      this.form['mobile'] = this.mobile;
      this.form['nativePlace'] = this.nativePlace;
      this.form['workType'] = this.workType;
      this.form['available'] = this.available;
      this.filterString = '';
      for(var key in this.form){
        if(this.form[key]){
          this.filterString += key+':'+this.form[key]+'|';
        }
      }
      //服务器基本地址
      var urlbase = this.$http.options.root;
      //请求的URL
      var resUrl = urlbase+'/user/api/admin/workmanProfiles?page=0&size='+this.perSize+'&sort=userId,ASC&filter='+this.filterString;

      this.$http.get(resUrl).then(
        (response)=>{
          //查询出服务器的数据
          this.listRes = response.body.data;
          //得到总页数
          this.allPageNumber = response.body.meta.pageCount;
          //获取当前页面 需要加一
          this.currentPage = response.body.meta.currentPage + 1;
        },
        (err)=>{
          console.log(err);
        }
      );
    },

    ccp: function(value){
      //服务器基本地址
      var urlbase = this.$http.options.root;

      //当前的页数
      var page = (value - 1).toString();

      //请求的URL
      //判断是否是查询还是正常显示
      if(this.filterString){
        var resUrl = urlbase+'/user/api/admin/workmanProfiles?page='+page+'&size='+this.perSize+'&sort=userId,ASC&filter='+this.filterString;
      }else{
        var resUrl = urlbase+'/user/api/admin/workmanProfiles?page='+page+'&size='+this.perSize+'&sort=userId,ASC';
      }

      this.$http.get(resUrl).then(
        (response)=>{

          this.listRes = response.body.data;
          // console.log(this.listRes);
        },
        (err)=>{
          console.log(err);
        }
      );
      //更改当前页面
      this.currentPage = value;
    }
  },
  components:{
    right,
    vPage
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
  width: 13px;
  height: 40px;
  float: left;
}
#right-up-icon{
  width: 500px;
  margin-left: 13px;
  height: 40px;
  float: left;

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
#right-form{
  height: 25px;
  margin-top: 10px;
}

#right-form-content{
  width: auto;
  height: 20px;
  float: left;

}
.rfc-input{
  width: 80px;
  color: #999999;
  margin-left: 5px;
  display: block;
  float: left;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  font-family: PingFangSC-Regular;
  border-radius: 4.5px;	/* relative value */
  -moz-border-radius: 4.5px;
  -webkit-border-radius: 4.5px;
  border: .5px  #5E90C0 solid;
}
.rfc-select{
  width: 120px;
  color: #999999;
  margin-left: 5px;
  display: block;
  float: left;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  font-family: PingFangSC-Regular;
  border-radius: 4.5px;	/* relative value */
  -moz-border-radius: 4.5px;
  -webkit-border-radius: 4.5px;
  border: 0.5px solid #5E90C0;
  background-color: #fff;
  /*text-align-last:center;*/

}
#rfc-search{
  float: right;
  margin-right: 10px;

}
#right-table{

  /*height: 500px;*/
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 20px;
}
#right-table table{
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #aaa;
  background-color: #fff;
  box-shadow: -1px 3px 8px rgb(188, 183, 180);
}

#right-table table th{
    font-family: PingFangSC-Regular;
    height: 30px;
    border:1px solid rgb(211, 211, 211);   /* 行名称边框 */
    color:rgb(55, 55, 55);              /* 行名称颜色 */
    font-size: 14px;
    padding-top:4px;
    padding-bottom:4px;
    padding-left:12px;
    padding-right:12px;
    text-align:center;
}
#right-table table td{
    font-family: PingFangSC-Regular;
    height: 30px;
    border:1px solid rgb(211, 211, 211);   /* 行名称边框 */
    color:rgb(55, 55, 55);              /* 行名称颜色 */
    font-size: 14px;
    padding-top:4px;
    padding-bottom:4px;
    padding-left:12px;
    padding-right:12px;
    text-align:center;
}
#page{
    width: 100%;
    height: auto;
    margin-top: 10px;
    text-align: center;
}
.pagenum{
  font-size: 13px;
  color: #393939;
  text-decoration: none;
  font-family: PingFangSC-Regular;
}
.focus{
  font-size: 10px;
  color: rgb(116, 116, 116);
  text-decoration: none;
  font-family: PingFangSC-Regular;
}

</style>
