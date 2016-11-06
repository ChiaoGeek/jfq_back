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
            <th>公司名</th>
            <th>负责人</th>
            <th>联系方式</th>
            <th>地址</th>
            <th>状态</th>

          </tr>
          <tr v-for="todo in apptList">
            <td @click="edit(todo.orderId, $event);" style="cursor:pointer;">编辑</td>
            <td>{{todo.orderId}}</td>
            <td>{{todo.customerName}}</td>
            <td>{{todo.customerMobile}}</td>
            <td>{{todo.orderAddress}}</td>
            <td>{{todo.orderTime}}</td>
            <td>&nbsp;</td>
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
export default {
  name: 'bookedOrder',
  data() {
    return {
      apptList: {},
      orderList: {},

      form: {}, //把搜索的字段封装成数组
      filterString: '', //把数组变成4字符串

      allPageNumber: null, //总页数
      currentPage: null, //当前页面
      count: 0,

      perSize: 20, //每页面显示的数据
    }
  },
  computed: {},
  mounted() {
    let that = this;
    //服务器基本地址
    var urlbase = this.$http.options.root;
    //请求的URL
    var resUrl = urlbase + '/decorationorder/api/admin/decorationOrders?page=0&size=' + this.perSize + '&sort=id,ASC&filter=status:[1,3]';
    this.$http.get(resUrl).then(
      (response) => {
        //查询出服务器的数据
        that.orderList = response.body.data;
        //得到总页数
        that.allPageNumber = response.body.meta.pageCount;
        //获取当前页面 需要加一
        that.currentPage = response.body.meta.currentPage + 1;
        // this.currentPage = 3;
        let list = [];
        for (let i in that.orderList) {
          list[i] = {};
        }
        that.count = 0;
        // that.apptList = list;
        for (let i in that.orderList) {
          that.$http.get(urlbase + "/decorationorder/api/admin/decorationAppts/" + that.orderList[i].id).then(
            (response) => {
              list[i] = response.body.data;
              that.count += 1;
              if(that.count == list.length) {
                  that.apptList = list;
              }
            },
            (err) => {
              console.log(err);
            }
          );
        }
      },
      (err) => {
        console.log(err);
      }
    );
  },
  methods: {
    edit: function(id, event) {
      // this.activeName = sortment;
      //给目前的实例注册一个事件
      //alert(1);
      var obj = {
        id: id,
        viewName: 'boEdit'
      };
      this.$emit('jumpEdit', obj);
    },
    ccp: function(value) {
      //服务器基本地址
      var urlbase = this.$http.options.root;
      //当前的页数
      var page = (value - 1).toString();
      //请求的URL
      //判断是否是查询还是正常显示
      if (this.filterString) {
        var resUrl = urlbase + '/decorationorder/api/admin/decorationOrders?page=' + page + '&size=' + this.perSize + '&sort=id,ASC&filter=status:[1,3]|' + this.filterString;
      } else {
        var resUrl = urlbase + '/decorationorder/api/admin/decorationOrders?page=' + page + '&size=' + this.perSize + '&sort=id,ASC&filter=status:[1,3]';
      }
      let that = this;
      this.$http.get(resUrl).then(
        (response) => {
          let list = [];
          for (let i in that.orderList) {
            list[i] = {};
          }
          that.count = 0;
          // that.apptList = list;
          for (let i in that.orderList) {
            that.$http.get(urlbase + "/decorationorder/api/admin/decorationAppts/" + that.orderList[i].id).then(
              (response) => {
                list[i] = response.body.data;
                that.count += 1;
                if(that.count == list.length) {
                    that.apptList = list;
                }
              },
              (err) => {
                console.log(err);
              }
            );
          }
        },
        (err) => {
          console.log(err);
        }
      );
      //更改当前页面
      this.currentPage = value;
    }
  },
  components: {
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
