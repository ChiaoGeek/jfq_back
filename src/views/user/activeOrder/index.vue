<template lang="html">
    <right >
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
              <input type="text" name="name" value="" class="rfc-input" placeholder="申请人姓名">
              <input type="text" name="name" value="" class="rfc-input" placeholder="申请人电话">
              <input type="text" name="name" value="" class="rfc-input" placeholder="激活人姓名">
              <input type="text" name="name" value="" class="rfc-input" placeholder="激活人电话">
            </form>
          </div>
          <div id="rfc-search">
              <img src="./img/search.png" alt="" />
          </div>

      </div>

      <div id="right-table">
        <table >
          <tr>
            <th width="40px">&nbsp;</th>
            <th width="48px">ID</th>
            <th>申请人姓名</th>
            <th>申请人电话</th>
            <th>激活人姓名</th>
            <th>激活人电话</th>
            <th>申办额度</th>
            <th>可申办总额度</th>
            <th>所选银行</th>
            <th>推荐人</th>
            <th>地区</th>
            <th>详细地址</th>

            <th>房屋面积</th>
            <th>收入</th>
            <th>订单状态</th>

          </tr>

          <tr v-for="todo in (1,20)">
            <td @click="edit(todo, $event);" style="cursor:pointer;">编辑</td>
            <td>{{todo}}</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>

          </tr>

        </table>
        <div id="page">
          <a href="#" class="pre"><img src="./img/first.png" alt="" /></a>
          <a href="#" class="pre"><img src="./img/pre.png" alt="" /></a>
          <a href="#"  class="pagenum">1</a>
          <a href="#"  class="focus">2</a>
          <a href="#"  class="focus">3</a>
          ....
          <a href="#"  class="focus">20</a>
          <a href="#"  class="focus">21</a>
          <a href="#"  class="focus">22</a>
          <a href="#" class="pre"><img src="./img/next.png" alt="" /></a>
          <a href="#" class="pre"><img src="./img/last.png" alt="" /></a>
        </div>
      </div>
    </right>
</template>

<script>
import right from "components/right/right.vue";
export default {
  name: 'rightstoremanage',
  data () {
    return {}
  },
  computed: {},
  mounted () {},
  methods: {
    edit: function(id, event){
      // this.activeName = sortment;
      //给目前的实例注册一个事件
      //alert(1);
      var obj = {id: id, viewName: 'aoEdit'};
      this.$emit('jumpEdit', obj);
    },
  },
  components:{
    right
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
  font-size: 10px;
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
