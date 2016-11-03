<template lang="html">
  <input type="text"  :name="inputName" class="input" :style="{width: inputWidth, height: inputHeight}" :value="value">

</template>

<script>
export default {
  name: 'inputCom',
  props: ['inputName', 'inputWidth','inputHeight', 'inputValue'],
  data () {
    return {

      // inputName: '2223d'
    }
  },
  computed: {
    value(){
      return this.inputValue;
    }
  },
  mounted () {},
  methods: {},
  components: {}
}
</script>

<style  scoped lang="css">
 .input{
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
