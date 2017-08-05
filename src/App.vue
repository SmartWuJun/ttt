<template>
  <div id="app">
    <div class="content">
      <div class="result">
      {{result}}
      </div>
      <div class="enter">
        {{enter===''?0:enter}}
      </div>
    </div>
    <div class="keyboards">
     <Keyboard v-for='item in keyList' :keyvalue="item" key='item'></Keyboard>
    </div>
   
  </div>
</template>

<script>
import Keyboard from './components/keyboard'

export default {
  name: 'app',
  data:()=>{
    return {
      keyList:['clear','+','-','*',
              '7','8','9','/',
              '4','5','6','0',
              '1','2','3','='
            ]
    }
  },
  components: {
    Keyboard
  },
  computed:{
    result(){ return this.$store.state.result;},
    enter(){ return this.$store.state.enter;},
  }
  
  
}
</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display:flex;
    flex-direction:column;
    color: #2c3e50;
    position:absolute;
    top:0;
    bottom:0;
    right:0;
    left:0;
  }

  .content{
    flex-grow:1;
    background:#ddd;
    display:flex;
    flex-direction:column;
    justify-content: flex-end;
    text-align: right;
    font-size: 24px;
    padding: 0 10px;
  }

  .result{
    font-size:36px;
    color:#333;
  }
  .enter{
    color:#666;
  }
  .keyboards{
    width:10rem;
    height:10rem;
    background:#eee;
    opacity:0.8;
    display:flex;
    flex-wrap:wrap;
  }

  .key{
    width:2.5rem;
    height:2.5rem;
    box-sizing:border-box;
    border-bottom:1px solid #dcdcdc;
    border-right:1px solid #dcdcdc;
    text-align:center;
    line-height:2.5rem;
    font-weight:bold;
  }

  .key:first-child{
    color:red;
  }
  .key:last-child{
    color:#fff;
    background:red;
  }               
</style>
