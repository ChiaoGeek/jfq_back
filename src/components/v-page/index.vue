<template lang="html">
  <div class="v-page">
    <div class="small-n-1" v-if="allPageNumber == 0 ">
       <!-- 总页面为零 -->
       暂时没有数据

    </div>
    <div class="small-n-1" v-if="allPageNumber <= pageThreshould &&  currentPage == 1 && allPageNumber == 1 ">
       <!-- 小于或等于阈值 且等1 -->
       <a href="#"  class="pagenum" v-for="todo in allPageNumber" :class="{focus: todo == currentPage}" @click="changeFocus(todo)">&nbsp;&nbsp;{{todo}}&nbsp;&nbsp;</a>

    </div>
    <div class="small-n-1" v-if="allPageNumber <= pageThreshould &&  currentPage == 1 && allPageNumber != 1 && allPageNumber != 0 ">
       <!-- 小于或等于阈值 且等1 -->
       <a href="#"  class="pagenum" v-for="todo in allPageNumber" :class="{focus: todo == currentPage}" @click="changeFocus(todo)">&nbsp;&nbsp;{{todo}}&nbsp;&nbsp;</a>
       <a href="#" class="pre"><img src="../../../static/img/next.png" alt="" @click="next"/></a>
       <a href="#" class="pre"><img src="../../../static/img/last.png" alt="" @click="last"/></a>

    </div>
    <div class="small-n-no-1" v-if="allPageNumber <= pageThreshould &&  currentPage != 1 &&  currentPage != allPageNumber">
       <!-- 小于或等于阈值 且不等1 不等于总页数 -->
       <a href="#" class="pre"><img src="../../../static/img/first.png" alt="" @click="first"/></a>
       <a href="#" class="pre"><img src="../../../static/img/pre.png" alt="" @click="pre"/></a>
       <a href="#"  class="pagenum" v-for="todo in allPageNumber" :class="{focus: todo == currentPage}" @click="changeFocus(todo)">&nbsp;&nbsp;{{todo}}&nbsp;&nbsp;</a>
       <a href="#" class="pre"><img src="../../../static/img/next.png" alt="" @click="next"/></a>
       <a href="#" class="pre"><img src="../../../static/img/last.png" alt="" @click="last"/></a>

    </div>
    <div class="small-n-no-1" v-if="allPageNumber <= pageThreshould &&  currentPage != 1 &&  currentPage == allPageNumber">
       <!-- 小于或等于阈值 且不等1 不等于总页数 -->
       <a href="#" class="pre"><img src="../../../static/img/first.png" alt="" @click="first"/></a>
       <a href="#" class="pre"><img src="../../../static/img/pre.png" alt="" @click="pre"/></a>
       <a href="#"  class="pagenum" v-for="todo in allPageNumber" :class="{focus: todo == currentPage}" @click="changeFocus(todo)">&nbsp;&nbsp;{{todo}}&nbsp;&nbsp;</a>

    </div>
    <div class="small-n" v-if="allPageNumber > pageThreshould && currentPage < pageThreshould && currentPage == 1 ">
      <!-- 总页数大于阈值且当前页小于阈值 当前页面等于1 -->
      <a href="#"  class="pagenum" v-for="todo in pageThreshould" :class="{focus: todo == currentPage}" @click="changeFocus(todo)">&nbsp;&nbsp;{{todo}}&nbsp;&nbsp;</a>
      ...&nbsp;&nbsp;
      <a href="#" class="pre"><img src="../../../static/img/next.png" alt="" @click="next"/></a>
      <a href="#" class="pre"><img src="../../../static/img/last.png" alt="" @click="last"/></a>
    </div>
    <div class="small-n" v-if="allPageNumber > pageThreshould && currentPage < pageThreshould && currentPage != 1 ">
      <!-- 总页数大于阈值且当前页小于阈值 当前页面不等1-->
      <a href="#" class="pre"><img src="../../../static/img/first.png" alt="" @click="first"/></a>
      <a href="#" class="pre"><img src="../../../static/img/pre.png" alt="" @click="pre"/></a>
      <a href="#"  class="pagenum" v-for="todo in pageThreshould" :class="{focus: todo == currentPage}" @click="changeFocus(todo)">&nbsp;&nbsp;{{todo}}&nbsp;&nbsp;</a>
      ...&nbsp;&nbsp;
      <a href="#" class="pre"><img src="../../../static/img/next.png" alt="" @click="next"/></a>
      <a href="#" class="pre"><img src="../../../static/img/last.png" alt="" @click="last"/></a>
    </div>
    <div class="large-n" v-if="allPageNumber > pageThreshould &&  currentPage >= pageThreshould && currentPage <= (allPageNumber - pageThreshould)+1 && currentPage != allPageNumber ">
     <!-- 总页面数大于阈值且 当前页面大于等于阈值小于等于总数减去阈值 -->
     <a href="#" class="pre"><img src="../../../static/img/first.png" alt="" @click="first"/></a>
     <a href="#" class="pre"><img src="../../../static/img/pre.png" alt="" @click="pre"/></a>
     ...&nbsp;&nbsp;
     <a href="#"  class="pagenum" v-for="todo in subPlusThre(currentPage)" :class="{focus: todo == currentPage}" @click="changeFocus(todo)"> &nbsp;&nbsp;{{todo}}&nbsp;&nbsp;</a>
     ...&nbsp;&nbsp;
     <a href="#" class="pre"><img src="../../../static/img/next.png" alt="" @click="next"/></a>
     <a href="#" class="pre"><img src="../../../static/img/last.png" alt="" @click="last"/></a>
    </div>
    <div class="large-all-n" v-if="allPageNumber > pageThreshould && currentPage >= pageThreshould &&  currentPage > (allPageNumber - pageThreshould)+1  && currentPage != allPageNumber ">
     <!-- 总页面数大于阈值且  当前页面大于等于阈值大于总数减去阈值 -->
     <a href="#" class="pre"><img src="../../../static/img/first.png" alt="" @click="first"/></a>
     <a href="#" class="pre"><img src="../../../static/img/pre.png" alt="" @click="pre"/></a>
     ...&nbsp;&nbsp;
     <a href="#"  class="pagenum" v-for="todo in subThre(allPageNumber)" :class="{focus: todo == currentPage}" @click="changeFocus(todo)">&nbsp;&nbsp;{{todo}}&nbsp;&nbsp;</a>
     <a href="#" class="pre"><img src="../../../static/img/next.png" alt="" @click="next"/></a>
     <a href="#" class="pre"><img src="../../../static/img/last.png" alt="" @click="last"/></a>
    </div>
    <div class="all" v-if="allPageNumber > pageThreshould && currentPage >= pageThreshould && currentPage == allPageNumber">
     <!-- 总页面数大于阈值且最后一页 -->
     <a href="#" class="pre"><img src="../../../static/img/first.png" alt="" @click="first"/></a>
     <a href="#" class="pre"><img src="../../../static/img/pre.png" alt="" @click="pre"/></a>
     ...&nbsp;&nbsp;
     <a href="#"  class="pagenum" v-for="todo in subThre(allPageNumber)" :class="{focus: todo == currentPage}" @click="changeFocus(todo)">&nbsp;&nbsp;{{todo}}&nbsp;&nbsp;</a>

    </div>
  </div>
</template>

<script>
export default {
  name: 'vPage',
  props: ['pePageThreshould', 'peAllPageNumber', 'peCurrentPage'],
  // props: ['pageThreshould', 'allPageNumber', 'currentPage'],
  data () {
    return {
      // pageThreshould: null, //样式设置阈值  奇数
      // allPageNumber: null, //总页面数量
      // currentPage: null,   //当前页面

    }
  },
  computed: {
    pageThreshould(){
      return this.pePageThreshould
    },
    allPageNumber(){
      return this.peAllPageNumber
    },
    currentPage(){
      return this.peCurrentPage
    },

  },
  mounted () {
    // this.pageThreshould = this.pePageThreshould;
    //
    // this.allPageNumber = this.peAllPageNumber;
    //
    // this.currentPage = this.peCurrentPage;


  },
  methods: {
    subThre: function(value){//返回range(i,m)之间的数组
      return Array(++value).join('0').split('').map(function(v,i){return ++i}).splice(this.allPageNumber - this.pageThreshould, value);

    },
    subPlusThre: function(value){//返回range(i,m)之间的数组
      value += (this.pageThreshould - 1)/2;
      return Array(++value).join('0').split('').map(function(v,i){return ++i}).splice(value - this.pageThreshould - 1, value);

    },
    changeFocus: function(value){

      this.$emit('changeCurrentPage', value);
    },
    first: function(){
      this.$emit('changeCurrentPage', 1);
    },
    pre: function(){

      this.$emit('changeCurrentPage', this.currentPage - 1);
    },
    next: function(){

      this.$emit('changeCurrentPage', this.currentPage + 1);

    },
    last: function(){

      this.$emit('changeCurrentPage', this.allPageNumber);
    },




  },
  components: {}
}
</script>

<style lang="css">
.pagenum{
  font-size: 15px;
  color: #393939;
  text-decoration: none;
  font-family: PingFangSC-Regular;
}
.focus{
  font-size: 18px;
  color: rgb(116, 116, 116);
  color: rgb(98, 144, 192);
  text-decoration: none;
  font-family: PingFangSC-Regular;
}

</style>
